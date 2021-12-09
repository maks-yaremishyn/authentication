import StyledMenuButton from './StyledMenuButton';

const MenuButton = ({ name, path }) => (
    <StyledMenuButton to={path}>
        {name}
        <div className="top"></div>
        <div className="right"></div>
        <div className="bottom"></div>
        <div className="left"></div>
    </StyledMenuButton>
);

export default MenuButton;
