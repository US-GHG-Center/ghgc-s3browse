import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'
import PageNotFound from './pages/PageNotFound';
import { Helmet } from 'react-helmet';

const baseUrl = process.env.REACT_APP_BASE_URL || '/';

// Disable React's development warnings
if (baseUrl !== '/') console.error = () => {};

const root = createRoot(document.getElementById('root'))

root.render(
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
    </React.StrictMode>,
)
