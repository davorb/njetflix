import React from 'react';
import styled from 'styled-components';

import Movie from './Movie';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Movies(props) {
  return (
    <Wrapper>
      {props.movies.map(movie => <Movie {...movie} key={movie.title} />)}
    </Wrapper>
  );
}
