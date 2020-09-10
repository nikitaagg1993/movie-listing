import React from 'react';
import CardContainer, { ImageStyle, FavoriteStyle, TitleStyle } from './styles'

const MovieCard = (props) => {
    const { movie, onToggleFavorite, isFavorite, isSmall,isMovieDetail } = props
 
    const { Poster, Title, Released } = movie;
    if (!movie || !Object.keys(movie).length) return null;

    const onCardClick = () => {
        if(isMovieDetail ||  !props.history) return;
        props.history.push({
            pathname: '/movie',
            state: { movie }
          });
    }

    const onClick = (event) => {
        event.stopPropagation();
        if(onToggleFavorite) onToggleFavorite()
    }

    return (
        <CardContainer isSmall={isSmall} onClick={onCardClick} isMovieDetail={isMovieDetail}>
            <ImageStyle src={Poster} alt={Title}/>
            <TitleStyle isSmall={isSmall}>{Title}</TitleStyle>
            {!isSmall && 
                (<>
                    <TitleStyle isSmall={isSmall}>{Released} </TitleStyle>
                    <FavoriteStyle
                        className="fa fa-star fa-2x"
                        isFavorite={isFavorite}
                        onClick={onClick}
                        isSmall={isSmall}
                    />
                </>)
            }
        </CardContainer>
    );
}

export default MovieCard;