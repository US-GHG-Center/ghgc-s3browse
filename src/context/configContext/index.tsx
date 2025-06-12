import { createContext, useContext, useRef, useEffect, ReactNode } from 'react';

import { S3BrowseConfig } from './types';

const ConfigContext = createContext({}); // NOTE: should have default values here

interface ConfigProviderProps {
  children: ReactNode,
  config: S3BrowseConfig
}

export const ConfigProvider = ({ children, config }: ConfigProviderProps): ReactNode => {
  const finalConfig = useRef<S3BrowseConfig | null>(null);

  useEffect(() => {
    if (!config) {
      const configFromEnv: S3BrowseConfig = {
        cloudWatchUrlBase: process.env.REACT_APP_ENDPOINT || '',
        sourceIMGUrl: process.env.REACT_APP_ENDPOINT || '',
        version: process.env.APP_VERSION || 'v2.37.0',
        excluded_prefixes: process.env.REACT_APP_EXCLUDED_PREFIXES ? process.env.REACT_APP_EXCLUDED_PREFIXES.split(',') : []
      }
      finalConfig.current = configFromEnv
    } else {
      finalConfig.current = config;
    }
  }, [children, config]);

  return (
    <ConfigContext.Provider value={{ config: finalConfig.current }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = (): { config: S3BrowseConfig | null } => useContext(ConfigContext) as { config: S3BrowseConfig | null };

