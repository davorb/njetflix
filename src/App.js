import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from './Menu';
import Genres from './Genres';
import Movies from './Movies';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  );
}

function Main() {
  return (<React.Fragment>
    <Menu />
    <Genres />
    <Movies />
  </React.Fragment>);
}

export default App;
