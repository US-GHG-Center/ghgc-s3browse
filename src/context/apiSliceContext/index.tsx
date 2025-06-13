import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import $ from 'jquery';

import { S3BrowseConfig } from "../configContext/types";

const ApiSliceContext = createContext({});

interface ApiSliceProviderProps {
  config: S3BrowseConfig
  children: ReactNode
}

export const ApiSliceProvider = ({config, children}: ApiSliceProviderProps): ReactNode => {
  const [apiSliceRef, setApiSliceRef] = useState<ReturnType <typeof createApi> | object>({});

  useEffect(() => {
    if (!config || !Object.keys(config).length) return;
    const apiSlice = createApi({
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
    });
    if (apiSlice) setApiSliceRef(apiSlice);
  }, [config, children]);

  return (
    <ApiSliceContext.Provider value={{ apiSlice: apiSliceRef }}>
      {children}
    </ApiSliceContext.Provider>
  )
}

export const getApiSlice = (): {apiSlice: ReturnType<typeof createApi> | object} => useContext(ApiSliceContext) as { apiSlice: ReturnType<typeof createApi> | object };
