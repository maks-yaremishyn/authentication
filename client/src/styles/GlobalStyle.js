import { createGlobalStyle } from 'styled-components';

import { primaryFontColor } from './constants';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html {
        font-family: sans-serif;
    }

    body {
        margin: 0;
    }

    body,
    input,
    button,
    a {
        line-height: 1.5;
        color: ${primaryFontColor};
    }

    a {
        text-decoration: none;
    }

    input,
    button {
        background: none;
        border: none;
        outline: none;
    }

    img {
        width: 100%;
    }

    .padding {
        padding: 0 16px;
    }
`;
