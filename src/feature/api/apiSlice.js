//handles api calls for search

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { XMLParser } from "fast-xml-parser";
import config from '../../config'
import $ from 'jquery'; 


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: config.cloudWatchUrlBase}),
    tagTypes: ['grans'],
    endpoints: builder => ({
        getGranSearch: builder.query({
            query: ({ search, delim }) => ({
                url: `/?list-type=1&delimiter=${delim}&prefix=${search}`,
                responseHandler: (response) => {
                    $(".loading-image").css({
                        "display": "block"
                    });
                    return response.text();
                }
            }),
        }),
    })
})

const removePaths = (array, valuesToRemove) => {
    if(array && valuesToRemove) {
    for (let j = 0; j < valuesToRemove.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].Prefix === `${valuesToRemove[j]}/`) {
                array.splice(i, 1);
            }
        }
    }

    }


}

export const fetchTheRest = async (resResp,delim,search ) => {
    const parser = new XMLParser();
    const jsonResult = parser.parse(resResp);
    removePaths(jsonResult.ListBucketResult.CommonPrefixes, config.excluded_prefixes);
    var marker = jsonResult.ListBucketResult.Marker;
    var nextMarker = jsonResult.ListBucketResult.NextMarker;
    
    if (marker || nextMarker) {
        var allResultsArrayContent = jsonResult.ListBucketResult.Contents;
        while( nextMarker && (marker != nextMarker)) {
            marker = nextMarker;
            const response = await fetch(`${config.cloudWatchUrlBase}?list-type=1&delimiter=${delim}&prefix=${search}&marker=${marker}`);
            const result = await response.text();
            const subResult = parser.parse(result)
            nextMarker = subResult.ListBucketResult.NextMarker;
            allResultsArrayContent = [...allResultsArrayContent, ...subResult.ListBucketResult.Contents];
    }
    jsonResult.ListBucketResult.Contents = allResultsArrayContent;
        
    }
    await $(".loading-image").css({
        "display": "none"
    });
    

    return jsonResult
    
}

export const {
    useGetGranSearchQuery,
    
} = apiSlice
