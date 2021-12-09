import React from 'react';

import StyledMenu from './StyledMenu';
import MenuItem from './MenuItem';

const menuItems = [
    { name: 'Rent', path: '/rent' },
    { name: 'Share', path: '/share' },
    { name: 'Ride', path: '/ride' },
    { name: 'Sixt+', path: '/plus' },
];

const Menu = () => {

    return (
        <StyledMenu>
            {menuItems.map(({ name, path }) => (
                <MenuItem 
                    key={path}
                    name={name} 
                    path={path}
                />
            ))}
        </StyledMenu>
    );
};

export default Menu;
