import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MovieDetails from './MovieDetails'

import Menu from './Menu';
import Genres from './Genres';
import Movies from './Movies';
import Searchbox from './Searchbox';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/movie/:id" component={MovieDetails} />
</Switch>
    </Router>
  );
}

function Main() {
  return (<React.Fragment>
    <Menu>
      <Searchbox />
    </Menu>
    <Genres />
    <Movies />
  </React.Fragment>);
}

export default App;
