import React from 'react';
import FavoritesStyle from './styles'
import Error from '../Error';
import MovieCard from '../MovieCard';

const Favorites = () => {
    const favorites = localStorage.getItem('favorites') || [];
    if(!favorites || !favorites.length) {
        return <Error error="You haven't added any favorites yet"></Error>
    }
    const parsedFavorites  = JSON.parse(favorites);
    return (
        <FavoritesStyle>
            {parsedFavorites.map(item => <MovieCard movie={item} isSmall history={this.props.history}/>)}
        </FavoritesStyle>
    );

};

export default Favorites;