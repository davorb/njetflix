import React, { Component } from 'react';

import Menu from './Menu';
import Movies from './Movies';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };

    this.getMovies();
  }

  getMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=49562b0dea19eaa1a784e6c5abad1286';

    fetch (url)
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        this.setState({
          movies: data.results
        });
      });
  }

  render() {
    return (
      <div className="app">
        <Menu />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
