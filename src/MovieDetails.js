import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Wrapper = styled.div`
  display: flex;
  padding: 2em;
`;

const DetailsWrapper = styled.div`
  padding: 1em;
`

const Poster = styled.img`
  border-radius: 5px;
`;

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
        <Wrapper>
          <Poster alt="poster" src={this.state.imgUrl} />
          <DetailsWrapper>
            <h1>{this.state.title}</h1>
            <p>{this.state.overview}</p>
          </DetailsWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default MovieDetails;
