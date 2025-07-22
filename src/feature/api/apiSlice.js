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


/**
 * A generic function that filters an array of objects.
 * It removes objects where a specified string property contains any of the given values.
 *
 * @param {Array|Object} items - The array of objects (or a single object) to process.
 * @param {Array<string>} valuesToRemove - An array of strings to check for.
 * @param {string} propertyName - The name of the property to inspect on each object (e.g., 'Key' or 'Prefix').
 * @returns {Array} The new, filtered array.
 */
const removeItemsByProperty = (items, valuesToRemove, propertyName) => {
  // 1. Normalize input: Ensure we are working with an array, even if a single object is passed.
  const array = Array.isArray(items) ? items : [items];

  // 2. Guard clause: If there are no values to check against, return the original array.
  if (!valuesToRemove || valuesToRemove.length === 0) {
    return array;
  }

  // 3. Filter the array: Return a new array containing only the items that should be kept.
  return array.filter(item => {
    // Keep items that don't have the specified property.
    if (!item || typeof item[propertyName] !== 'string') {
      return true;
    }

    // Check if the item's property contains any of the "kill strings".
    // The `some` method returns true if the condition is met for at least one element.
    const shouldBeRemoved = valuesToRemove.some(value =>
      item[propertyName].includes(`${value}/`)
    );

    // The filter method keeps an element if the callback returns `true`.
    // We keep the item only if it should NOT be removed.
    return !shouldBeRemoved;
  });
};



const removePathsPrefixes = (array, valuesToRemove) => {

    if(typeof array === "object" && array.Prefix) {
        array = [array]
    }

    if(array && valuesToRemove) {
    var arrayWithRemovedEle = []
    for (let j = 0; j < valuesToRemove.length; j++) {
        for (let i = 0; i < array.length; i++) {
            // console.log.log(`compairing ${tempArray[i].Prefix} with ${valuesToRemove[j]}/`)
            if (array[i].Prefix && array[i].Prefix.includes(`${valuesToRemove[j]}/`)) {
            // console.log(`compairing ${array[i].Prefix} with ${valuesToRemove[j]}/`)
                arrayWithRemovedEle.push(array[i])
            }
        }
    }
    return array.filter(element => !arrayWithRemovedEle.includes(element))

    }
    return array
}

const removePathsKeys = (array, valuesToRemove) => {
    var arrayWithRemovedEle = []

    if(typeof array === "object" && array.Key) {
        array = [array]
    }

    if(array && valuesToRemove) {
    
    for (let j = 0; j < valuesToRemove.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].Key && array[i].Key.includes(`${valuesToRemove[j]}/`)) {
                arrayWithRemovedEle.push(array[i])
            }
        }
    }

    return array.filter(element => !arrayWithRemovedEle.includes(element))


    }
    return array
    
}

export const fetchTheRest = async (resResp,delim,search ) => {
    const parser = new XMLParser();
    const jsonResult = parser.parse(resResp);
    jsonResult.ListBucketResult.CommonPrefixes = removePathsPrefixes(jsonResult.ListBucketResult.CommonPrefixes, config.excluded_prefixes);
    jsonResult.ListBucketResult.Contents = removePathsKeys(jsonResult.ListBucketResult.Contents, config.excluded_prefixes);

    // console.log("After Common", jsonResult.ListBucketResult.CommonPrefixes)
    var marker = jsonResult.ListBucketResult.Marker;
    var nextMarker = jsonResult.ListBucketResult.NextMarker;
    
    if (marker || nextMarker) {
        var allResultsArrayContent = jsonResult.ListBucketResult.Contents;
        while( nextMarker && (marker !== nextMarker)) {
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
