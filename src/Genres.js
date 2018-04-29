import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setGenres, setCurrentGenre } from './reducers';
import Genre from './Genre';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
  padding-bottom: 0;
`;

class Genres extends Component {
  constructor(props) {
    super(props);
    this.getGenres = this.getGenres.bind(this);

    this.getGenres();
  }

  getGenres() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=49562b0dea19eaa1a784e6c5abad1286';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.props.setGenres(data.genres);
      });
  }

  render() {
    return (
      <Wrapper>
        <Genre name="all genres"
               id={-1}
               selected={this.props.currentGenre === -1}
               onClick={() => this.props.setCurrentGenre(-1)}
        />
        {this.props.genres.map(genre => <Genre {...genre}
                                               key={genre.id}
                                               onClick={() => this.props.setCurrentGenre(genre.id)}
                                               selected={this.props.currentGenre === genre.id} />)}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    currentGenre: state.currentGenre
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setGenres: genres => dispatch(setGenres(genres)),
    setCurrentGenre: id => dispatch(setCurrentGenre(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
