import styled from 'styled-components';

import map from '../../images/map.png';

export default styled.main`
    min-height: 100vh;
    padding: 1px 16px;
    background: #333 url("${map}") no-repeat left bottom;
    background-size: calc(min(1200px, 90%)); 
    overflow: hidden;

    .box {
        position: relative;
        max-width: 500px;
        margin: 16vh auto 16px;
        padding: 16px 24px 24px;
        background-color: #fff;

        @media (max-width: 1000px) {
            margin-top: 24vh;
        }

        > label:last-of-type {
            margin-top: 16px;
        }
    }

    .title {
        position: absolute;
        padding: 8px 16px;
        font-size: 16px;
        font-weight: 700;
        background-color: #fff;
        cursor: pointer;

        &--1 {
            right: 100px;
            bottom: 100%;
        }

        &--2 {
            right: 0;
            bottom: 100%;
        }

        &.active::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 4px;
            width: 75%;
            height: 1px;
            margin: 0 auto;
            background-color: #333;
        }
    }
`;
