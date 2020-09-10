
export const getItemFromLocalStorage = (movie) => {
    const existingFavorites = localStorage.getItem('favorites');
    return JSON.parse(existingFavorites) || [];
}

const setItemInLocalStorage = (movie) => {
    const newFavorites = JSON.stringify(movie);
    localStorage.setItem('favorites', newFavorites);
}

export default setItemInLocalStorage;