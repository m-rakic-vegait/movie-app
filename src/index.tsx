import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { GenresContextProvider } from './contexts/GenresContext';

const root: HTMLElement = document.getElementById('root')!;
const rootElement: ReactDOM.Root = ReactDOM.createRoot(root);
rootElement.render(
    <GenresContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GenresContextProvider>
);