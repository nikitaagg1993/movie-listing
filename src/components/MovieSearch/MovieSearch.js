import React from 'react';
import NavBar from '../NavBar';
import SearchBar from '../SearchBar'
import Error from '../Error';
import generateUrl from '../../utils/generateUrl';
import MovieCard from '../MovieCard';
import MovieSearchStyles from './styles';

export default class MovieSearch extends React.Component {
    constructor() {
        super();
        this.state = {
          movie: {},
          error: null,
          isLoading: true,
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

            this.setState({
                isLoading: false,
                movie,
                error: null,
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
        const url = generateUrl(result);
        this.getApiData(url);
    }

    onToggleFavorite = () => {
        const { isFavorite } = this.state;
        this.setState({ isFavorite: !isFavorite });
    }

    render() {
        const { error, isFavorite, movie } = this.state;
        return (
        <>
            <NavBar/>
            <MovieSearchStyles>
            <SearchBar onClick={this.onClick}/>
                {error
                    ? <Error error='No Movie Found' ></Error>
                    : <MovieCard
                        isFavorite={isFavorite}
                        movie={movie}
                        onToggleFavorite={this.onToggleFavorite}
                    />}
            </MovieSearchStyles>
        </>
        )
    }
}