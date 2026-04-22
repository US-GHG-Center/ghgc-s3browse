import React from 'react'
import { AppContainer } from './AppContainer'
import { StoreContainer } from './StoreContainer'
import { ConfigProvider } from './context/configContext'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; 
import { S3BrowseConfig } from './context/configContext/types'

const baseUrl = process.env.REACT_APP_BASE_URL || '/';

// Disable React's development warnings
if (baseUrl !== '/') console.error = () => {};

interface CloudBrowseProps {
    config: S3BrowseConfig 
}

export function CloudBrowse({ config }: CloudBrowseProps) {
    return ( 
        <React.StrictMode>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <ConfigProvider config={config}>
                <StoreContainer>
                  <AppContainer/>
                </StoreContainer>
            </ConfigProvider>
            </ThemeProvider>
        </React.StrictMode>
    )
}
