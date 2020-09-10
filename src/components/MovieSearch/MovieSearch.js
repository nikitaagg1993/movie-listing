import React from 'react';
import SearchBar from '../SearchBar'
import Error from '../Error';
import generateUrl from '../../utils/generateUrl';
import MovieCard from '../MovieCard';
import MovieSearchStyles from './styles';
import Loader from '../Loader';
import setItemInLocalStorage, { getItemFromLocalStorage } from '../../utils/localStorageHelper'


export default class MovieSearch extends React.Component {
    constructor() {
        super();
        this.state = {
          movie: {},
          error: null,
          isLoading: false,
          isFavorite: false,
        };
      }

    getApiData = (url) => { 
        window.fetch(url)
        .then(response => response.json())
        .then((movie) => {
            if(movie.Response === "False") {
                this.setState({
                    isLoading: false,
                    error: movie.Error,
                });
                return;
            }

            const favorites = getItemFromLocalStorage();
            const findIndex = favorites.findIndex(item => item.imdbID === movie.imdbID);

            this.setState({
                isLoading: false,
                movie,
                error: null,
                isFavorite: findIndex !== -1,
            });
        })
        .catch((error) => {
            this.setState({
                isLoading: false,
                error,
            });
        });
    };

    onClick = (result) => {
        this.setState({ isLoading: true });
        if(!result.t) {
            this.setState({ error: 'Title should not be blank', isLoading: false})
            return;
        }
        const url = generateUrl(result);
        this.getApiData(url);
    }

    onToggleFavorite = () => {
        const { isFavorite, movie } = this.state;
        this.setState({ isFavorite: !isFavorite }, () => {
            const parsedFavorites = getItemFromLocalStorage();
            if(this.state.isFavorite) parsedFavorites.push(movie)
            else if(parsedFavorites.length) {
                const favIndex = parsedFavorites.findIndex(item => item.imdbID === movie.imdbID)
                parsedFavorites.splice(favIndex,1)
            }
            setItemInLocalStorage(parsedFavorites);
        });
    }

    getMovieComponent = () => {
        const { error, isLoading, isFavorite, movie } = this.state
        
        if(isLoading) return <Loader />;
        if(error || !movie) return <Error error={error}/>;
        return (<MovieCard
            isFavorite={isFavorite}
            movie={movie}
            onToggleFavorite={this.onToggleFavorite}
            history={this.props.history}
        />);
    }

    render() {
        return (
            <>
                <MovieSearchStyles>
                    <SearchBar onClick={this.onClick}/>
                    {this.getMovieComponent()}
                </MovieSearchStyles>
            </>
        )
    }
}