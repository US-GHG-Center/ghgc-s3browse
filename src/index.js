import React from 'react'
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Provider } from 'react-redux'
import { TopBar } from './components/universal/TopBar';
import { Banner } from './components/universal/Banner';
import { CssBaseline } from '@mui/material';
import App from './App'
import store from './app/store'
import { Footer } from './components/universal/Footer';
import PageNotFound from './pages/PageNotFound';
import { Helmet } from 'react-helmet';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

const baseUrl = process.env.REACT_APP_BASE_URL || '/';

// Disable React's development warnings
if (baseUrl !== '/') console.error = () => {};



const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Helmet>
            {baseUrl && <base href={baseUrl} />}
        </Helmet>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div className="app">
                <header>
                
                    <CssBaseline />
                    <Banner />
                    <TopBar />
                </header>
                <main>
                    <BrowserRouter>
                        <Routes>
                            <Route path='*' element={<App />} />
                            <Route path='/browseui/404' element={<PageNotFound />} />
                        </Routes>
                    </BrowserRouter>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
