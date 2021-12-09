import styled from 'styled-components';

export default styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    font-size: 18px;
    overflow: hidden;

    &:nth-child(1) {
        background-color: #f7f5e5;
    }

    &:nth-child(2) {
        background-color: lightblue;
    }

    &:nth-child(3) {
        background-color: lightcoral;
    }

    &:nth-child(4) {
        background-color: lightsalmon;
    }

    &::before {
        content: "";
        position: absolute;
        top: ${({ top }) => top || '0'};
        left: ${({ left }) => left || '0'};
        width: ${({ overlayWidth }) => overlayWidth || '100%'};
        height: ${({ overlayHeight }) => overlayHeight || '100%'};
        background-color: pink;
        border-radius: 50%;
        opacity: 0;
        transform: scale(0);
        transition: transform 1s, opacity 1s;
        pointer-events: none;
    }

    &.active::before {
        opacity: 0.6;
        transform: scale(1);
    }
`;
