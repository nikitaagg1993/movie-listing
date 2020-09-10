import React from 'react';
import NavBarStyle, { StyledLink, Text } from './styles';

const NavBar = () => (
    <NavBarStyle >
        <ul>
            <StyledLink to="/">Home</StyledLink>
            <Text style={{color: 'white', display: 'inline'}} > | </Text>
            <StyledLink to="/favorites">Favorites</StyledLink>
        </ul>
    </NavBarStyle>);

export default NavBar;