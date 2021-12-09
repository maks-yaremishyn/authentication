import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
    position: relative;
    padding: 20px;

    .top,
    .right,
    .bottom,
    .left {
        position: absolute;
        background-color: currentColor;
    }

    .top,
    .bottom {
        width: 80%;
        height: 2px;
    }

    .top {
        top: 0;
        left: 0;
    }

    .bottom {
        bottom: 0;
        right: 0;
    }

    .left,
    .right {
        width: 2px;
        height: 70%;
    }

    .left {
        top: 0;
        left: 0;
    }

    .right {
        bottom: 0;
        right: 0;
    }
`;
