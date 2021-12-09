import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import AuthPage from '../AuthPage';
import Menu from '../Menu';


const Router = () => {
    const { isAuthenticated } = useContext(AuthContext);
        
    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/rent" element={<Menu />} />
            <Route path="/share" element={<Menu />} />
            <Route path="/ride" element={<Menu />} />
            <Route path="/plus" element={<Menu />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;
