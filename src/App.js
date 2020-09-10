import React, { Component } from "react";
import MovieSearch from "./components/MovieSearch";
import { Switch, Route } from 'react-router'
import NavBar from './components/NavBar';
import Favorites from './components/Favorites'
import MoviieDetails from './components/MovieDetails';

class App extends Component {
  render() { 
    return (
      <>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={MovieSearch} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/movie" component={MoviieDetails} />
        </Switch>
   </>
    );
  }
}

export default App;
