import { createContext } from 'react';

import useAuth from '../hooks/useAuth';

function noop() {};

const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false,
});

const AuthProvider = ({ children }) => {
    const { token, login, logout, userId } = useAuth();
    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
