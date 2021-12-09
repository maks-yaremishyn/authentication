import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from '../../context/AuthContext';
import { primaryOrange } from '../../styles/constants';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    z-index: 9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 16px;
    border-bottom: 3px dotted ${primaryOrange};
    background-color: #333;

    .go-back {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;

        &::after {
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #333;
            border-left: 2px solid #333;
            transform: translateX(2px) rotate(-45deg);
        }
    }

    .logo {
        font-size: 24px;
        font-weight: 900;
        text-transform: uppercase;
        color: ${primaryOrange};
    }
`;

const StyledButton = styled.button`
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 5;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Header = () => {
    const location = useLocation();
    const { logout } = useContext(AuthContext);

    if (location.pathname !== '/auth') {
        return (
            <StyledButton
                type="button"
                onClick={logout}
            >
                Sign out
            </StyledButton>
        );
    }

    return (
        <StyledHeader>
            <span className="logo">Sixt</span>
        </StyledHeader>
    );
};

export default Header;
