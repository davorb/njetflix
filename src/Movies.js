import React, { Component } from 'react';
import { filter, contains, compose } from 'ramda';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setMovies } from './reducers';
import Movie from './Movie';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

class Movies extends Component {
  constructor(props) {
    super(props);
    this.getMovies = this.getMovies.bind(this);

    this.getMovies();
  }

  getMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=49562b0dea19eaa1a784e6c5abad1286';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.props.setMovies(data.results);
      });
  }

  render() {
    return (
      <Wrapper>
        {this.props.movies.map(movie => <Movie {...movie} key={movie.title} />)}
      </Wrapper>
    );
  }
}

const searchFilter = searchString => filter(movie => movie.title.toLowerCase().includes(searchString.toLowerCase()));
const genreFilter = currentGenreId => filter(movie => currentGenreId === -1 ? true : contains(currentGenreId, movie.genre_ids));

function mapStateToProps(state) {
  return {
    movies: compose(searchFilter(state.search), genreFilter(state.currentGenre))(state.movies)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMovies: movies => dispatch(setMovies(movies))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
