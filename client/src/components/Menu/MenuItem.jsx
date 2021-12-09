import React, { useState } from 'react';

import StyledMenuItem from './StyledMenuItem';
import MenuButton from './MenuButton';

const MenuItem = ({ name, path }) => {
    const [width, setWidth] = useState('100%');
    const [height, setHeight] = useState('100%');
    const [top, setTop] = useState('0');
    const [left, setLeft] = useState('0');
    const [isActive, setActive] = useState(false);

    const updateStyles = e => {
        const card = e.currentTarget;
        const { offsetWidth, offsetHeight } = card;
        const { top, left } = card.getBoundingClientRect();
        const itemTop = window.scrollY + top;
        const itemLeft = window.scrollX + left;
        const diagonal = Math.round(Math.sqrt((offsetWidth ** 2) + (offsetHeight ** 2)));
        const sideLength = diagonal * 2;

        setWidth(`${sideLength}px`);
        setHeight(`${sideLength}px`);

        const overlayTop = Math.round(e.pageY - itemTop) - diagonal;
        const overlayLeft = Math.round(e.pageX - itemLeft) - diagonal;

        setTop(`${overlayTop}px`);
        setLeft(`${overlayLeft}px`);
    };

    const pointerDownHandler = e => {
        setActive(true);
        updateStyles(e);
    };

    const pointerUpHandler = e => {
        setActive(false);
        updateStyles(e);
    };

    return (
        <StyledMenuItem 
            className={isActive ? 'active' : ''}
            onPointerDown={pointerDownHandler}
            onPointerUp={pointerUpHandler}
            onPointerLeave={pointerUpHandler}
            top={top}
            left={left}    
            overlayWidth={width}
            overlayHeight={height}
        >
            <MenuButton 
                name={name} 
                path={path}
            />
        </StyledMenuItem>
    );
};

export default MenuItem;
