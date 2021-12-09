import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';

import { AuthProvider } from '../../context/AuthContext';
import Header from '../Header';
import Router from '../Router';

const App = () => (
    <AuthProvider>
        <GlobalStyle />
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    </AuthProvider>
);

export default App;
