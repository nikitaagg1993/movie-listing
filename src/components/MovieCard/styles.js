import styled from 'styled-components';

const CardContainer = styled.div`
    border-color: #ebecf0;
    border-style: ridge;
    border-width: 1px;
    background-color: #ebecf0;
    margin: 10px;
    width: 20%;
    margin: 50px auto 0;
    height: 750px;
`;

export const ImageStyle = styled.img`
    width: 100%;
    height: 80%;
`;

export const TitleStyle = styled.h3`
    color: #317c99;
    display: block;
`;

export const FavoriteStyle = styled.div`
    ${props => props.isFavorite && ` color: orange;`}
    height: 20px;
    width: 20px;
    margin-bottom: 30px;
`;

export default CardContainer;