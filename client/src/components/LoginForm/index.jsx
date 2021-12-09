import React from 'react';
import styled from 'styled-components';

import { primaryOrange } from '../../styles/constants';

const StyledLoginForm = styled.form`
    .heading {
        height: 42px;
        margin-bottom: 16px;
        font-size: 14px;
    }

    .input {
        display: block;
        width: 100%;
        margin-bottom: 16px;
        padding: 8px 0;
        border: none;
        border-bottom: 2px solid ${primaryOrange};
    }

    .button {
        width: 100%;
        margin-top: 24px;
        padding: 8px 16px;
        font-size: 16px;
        text-transform: uppercase;
        color: #fff;
        background-color: ${primaryOrange};
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const LoginForm = ({ authType, loginFormContent, changeHandler, formSubmitHandler, loading }) => {
    return (
        <StyledLoginForm onSubmit={formSubmitHandler}>
            <p className="heading">{loginFormContent[authType].heading}</p>
            <label>
                Email
                <input
                    type="email"
                    className="input" 
                    name="email"
                    onChange={changeHandler}
                />
            </label>
            <label>
                Password
                <input 
                    type="password"
                    className="input"
                    name="password"
                    onChange={changeHandler}
                />
            </label>

            <button
                type="submit"
                className="button"
                disabled={loading}
            >
                Proceed
            </button>
        </StyledLoginForm>
    );
};

export default LoginForm;
