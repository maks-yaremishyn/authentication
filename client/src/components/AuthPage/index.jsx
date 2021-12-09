import React, { useState, useContext } from 'react';

import useHttp from '../../hooks/useHttp';
import { AuthContext } from '../../context/AuthContext';
import StyledAuthPage from './StyledAuthPage';
import LoginForm from '../LoginForm';
import Toast from '../ErrorPopUp';

const loginFormContent = {
    login: {
        heading: 'Please enter credentials to login to your account'
    },
    register: {    
        heading: 'Please enter your email and password, which you will later use to login to your account'
    },
};

const AuthPage = () => {
    const { login } = useContext(AuthContext);
    const { loading, error, request, clearError } = useHttp();
    const [authType, setAuthType] = useState('login');
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState(null);

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const formSubmitHandler = async e => {
        e.preventDefault();
        clearError();
        setMessage(null);

        try {
            const data = await request(`/api/auth/${authType}`, 'POST', { ...form });
            console.log(data);

            if (authType === 'login') {
                login(data.token, data.userId);
            } else {
                setAuthType('login');
                setMessage(data.message);
            }
        } catch (e) {}
    };

    return (
        <StyledAuthPage>
            <div className="box">
                <button 
                    type="button"
                    className={`title title--1 ${authType === 'login' ? 'active' : ''}`}
                    onClick={() => setAuthType('login')}
                >
                    Sign in
                </button>
                <button 
                    type="button"
                    className={`title title--2 ${authType === 'register' ? 'active' : ''}`}
                    onClick={() => setAuthType('register')}
                >
                    Sign up
                </button>

                <LoginForm 
                    authType={authType} 
                    loginFormContent={loginFormContent}
                    changeHandler={changeHandler} 
                    formSubmitHandler={formSubmitHandler}
                    loading={loading}
                />

                {error && <Toast message={error} error />}
                {message && <Toast message={message} />}
            </div>
        </StyledAuthPage>
    );
};

export default AuthPage;
