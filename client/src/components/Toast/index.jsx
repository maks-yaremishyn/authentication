import React from 'react';
import styled, { keyframes } from 'styled-components';

import { primaryOrange } from '../../styles/constants';

const swimOut = keyframes`
    from {
        transform: translateX(200px);
    } to {
        transform: translateX(0);
    }
`;

const StyledToast = styled.div`
    position: fixed;
    top: 60px;
    right: 16px;
    width: 200px;
    padding: 8px 0;
    font-weight: 700;
    color: ${({ error }) => error ? '#ff0033' : primaryOrange};
    border-bottom: 2px solid ${({ error }) => error ? '#ff0033' : primaryOrange};
    animation: ${swimOut} 0.6s;
`;

const Toast = ({ message, error = false }) => {
    return (
        <StyledToast error={error} >
            {message}
        </StyledToast>
    );
};

export default Toast;
