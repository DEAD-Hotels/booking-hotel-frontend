import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/AppView';
import {BrowserRouter} from "react-router-dom";
import {SearchContextProvider} from "./context/SearchContext";
import {AppContextProvider} from "./context/AppContext";
import {SnackbarProvider} from "notistack";
import {snackbarProviderProps} from "./utils/snackbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <SearchContextProvider {...snackbarProviderProps}>
                <SnackbarProvider>
                    <AppContextProvider>
                        <App/>
                    </AppContextProvider>
                </SnackbarProvider>
            </SearchContextProvider>
        </BrowserRouter>


    </React.StrictMode>
);

