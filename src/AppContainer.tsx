import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'
import PageNotFound from './pages/PageNotFound';
import { ConfigProvider } from './context/configContext'

import { S3BrowseConfig } from './context/configContext/types'

import './App.css'

const baseUrl = process.env.REACT_APP_BASE_URL || '/';

// Disable React's development warnings
if (baseUrl !== '/') console.error = () => {};

interface CloudBrowseProps {
    config: S3BrowseConfig 
}

export function CloudBrowse({ config }: CloudBrowseProps) {
    return ( 
        <React.StrictMode>
            <Provider store={store}>
                <ConfigProvider config={config}>
                    <div className="app">
                        <BrowserRouter>
                            <Routes>
                                <Route path='*' element={<App />} />
                                <Route path='/browseui/404' element={<PageNotFound />} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </ConfigProvider>
            </Provider>
        </React.StrictMode>
    )
}
