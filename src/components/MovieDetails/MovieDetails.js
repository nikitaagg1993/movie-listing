import React from 'react'
import MovieCard from '../MovieCard';
import Error from '../Error';
import { TitleStyle } from '../MovieCard/styles'
import Details from './styles'
import { getItemFromLocalStorage } from '../../utils/localStorageHelper';

const alreadyDisplayed = ['Title', 'Poster', 'Released', 'Response'];

const ratings = (list) => {
    return list.map((item) => <TitleStyle isMovieDetail>{`${item.Source} Ratings: ${item.Value}`}</TitleStyle>)
}
const otherDetails = (movie) => {
    const keys = Object.keys(movie);
    return keys.map(item => {
        if(alreadyDisplayed.includes(item)) return null
        if(item === 'Ratings') return ratings(movie[item])
        return <TitleStyle isMovieDetail>{`${item} : ${movie[item]}`}</TitleStyle>
    })
}

const MovieDetails = (props) => {
    if(!props.location || !props.location.state || !props.location.state.movie) {
        return <Error error="This movie doesn't exist"></Error>
    }
    const { location: { state : { movie } } } = props;
    const favorites = getItemFromLocalStorage();
    const findIndex = favorites.findIndex(item => item.imdbID === movie.imdbID);
    return (
    <>
        <MovieCard movie={props.location.state.movie} isMovieDetail isFavorite={findIndex !== -1}/>
        <Details>
            {otherDetails(props.location.state.movie)}
        </Details>
    </>
    )

}

export default MovieDetails;