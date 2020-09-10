import styled , {css}from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.header`
    background-color: #46c7e0;
    display: flex;
    flex-direction: column;
    height: 50px;

`;

const commonCss = css`
    color: white;
    display: inline;
    font-size: 18px;
    font-weight: 600;
`;

export const StyledLink = styled(Link)`
    padding: 10px;
    text-decoration: none;
    ${commonCss}
`;

export const Text = styled.div`
    color: white;
    display: inline;
    font-size: 18px;
    font-weight: 600;
`;

export default NavBar;