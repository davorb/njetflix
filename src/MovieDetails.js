import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Menu from './Menu';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovieInfo = this.fetchMovieInfo.bind(this);

    this.state = {
      title: '',
      overview: '',
      imgUrl: ''
    };

    this.fetchMovieInfo();
  }

  fetchMovieInfo() {
    const id = this.props.match.params.id;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=49562b0dea19eaa1a784e6c5abad1286`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          title: data.title,
          overview: data.overview,
          imgUrl: `https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.poster_path}`
        });
      });
  }

  render() {
    return (
      <div>
        <Menu />
        <h1>{this.state.title}</h1>
        <img alt="poster" src={this.state.imgUrl} />
        <p>{this.state.overview}</p>
      </div>
    );
  }
}

export default MovieDetails;
