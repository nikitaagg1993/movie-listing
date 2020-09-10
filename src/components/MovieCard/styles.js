import styled from 'styled-components';

const CardContainer = styled.div`
    border-color: #ebecf0;
    border-style: ridge;
    border-width: 1px;
    background-color: #ebecf0;
    width: 33%;
    margin: 40px auto 0;
    height: 800px;

    ${props => props.isSmall && `
        margin: 50px 30px 0;
        height: 300px;
        width: 200px;
    `}

    ${props => props.isMovieDetail && `
        text-align: center;
        float:left;
        margin-left: 50px;
        eight: 850px;
    `}
`;

export const ImageStyle = styled.img`
    width: 100%;
    height: 80%;
`;

export const TitleStyle = styled.h3`
    color: #317c99;
    display: block;

    ${props => props.isSmall && `
        font-size: 12px;
        text-align: center;
    `}

    ${props => props.isMovieDetail && `
        font-size: 14px;
    `}

`;

export const FavoriteStyle = styled.div`
    ${props => props.isFavorite && ` color: orange;`}
    height: 20px;
    width: 20px;
    margin-bottom: 30px;
`;

export default CardContainer;