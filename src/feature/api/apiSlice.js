//handles api calls for search

import { XMLParser } from "fast-xml-parser";
import $ from 'jquery'; 

// ******************:Note:******************
// Exported this to apiSliceContext.tsx
// This is done as the apiSlice is depent on the config provided by configProvider.
// and the apiSliceContext made sense to be a part of the React tree.
// ******************************************
// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({baseUrl: config.cloudWatchUrlBase}),
//     tagTypes: ['grans'],
//     endpoints: builder => ({
//         getGranSearch: builder.query({
//             query: ({ search, delim }) => ({
//                 url: `/?list-type=1&delimiter=${delim}&prefix=${search}`,
//                 responseHandler: (response) => {
//                     $(".loading-image").css({
//                         "display": "block"
//                     });
//                     return response.text();
//                 }
//             }),
//         }),
//     })
// })

// export const {
//     useGetGranSearchQuery,
// } = apiSlice

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

export const fetchTheRest = async (resResp, cloudWatchUrlBase, excluded_prefixes, delim, search ) => {
    const parser = new XMLParser();
    const jsonResult = parser.parse(resResp);
    removePaths(jsonResult.ListBucketResult.CommonPrefixes,excluded_prefixes);
    var marker = jsonResult.ListBucketResult.Marker;
    var nextMarker = jsonResult.ListBucketResult.NextMarker;
    
    if (marker || nextMarker) {
        var allResultsArrayContent = jsonResult.ListBucketResult.Contents;
        while( nextMarker && (marker !== nextMarker)) {
            marker = nextMarker;
            const response = await fetch(`${cloudWatchUrlBase}?list-type=1&delimiter=${delim}&prefix=${search}&marker=${marker}`);
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
