import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'
import PageNotFound from './pages/PageNotFound';

import './App.css'

const baseUrl = process.env.REACT_APP_BASE_URL || '/';

// Disable React's development warnings
if (baseUrl !== '/') console.error = () => {};

export function CloudBrowse() {
    return ( 
        <React.StrictMode>
            <Provider store={store}>
                <div className="app">
                    <BrowserRouter>
                        <Routes>
                            <Route path='*' element={<App />} />
                            <Route path='/browseui/404' element={<PageNotFound />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </Provider>
        </React.StrictMode>
    )
}
