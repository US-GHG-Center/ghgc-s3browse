import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Provider } from 'react-redux'
import App from './App'
import getStore from './app/store'
import PageNotFound from './pages/PageNotFound';

import { useConfig } from "./context/configContext";
import { getApiSlice } from "./context/apiSliceContext";

import './App.css'

const baseUrl = process.env.REACT_APP_BASE_URL || '/';

// Disable React's development warnings
if (baseUrl !== '/') console.error = () => {};

export function AppContainer() {
    const { apiSlice } = getApiSlice();
    if (!apiSlice || !Object.keys(apiSlice).length) return;
    const store = getStore(apiSlice);
    return (
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
    )
}
