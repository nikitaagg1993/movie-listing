import React from 'react';
import CardContainer, { ImageStyle, FavoriteStyle, TitleStyle } from './styles'

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
 
    const { Poster, Title, Released } = movie;
    if (!movie || !Object.keys(movie).length) return null;

    return (
        <CardContainer>
            <ImageStyle src={Poster} alt={Title}/>
            <TitleStyle>{Title}</TitleStyle>
            <TitleStyle>{Released} </TitleStyle>
            <FavoriteStyle className="fa fa-star fa-2x" isFavorite={isFavorite} onClick={()=> onToggleFavorite()}></FavoriteStyle>
        </CardContainer>
    );
}

export default MovieCard;