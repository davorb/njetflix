import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1em;
`

export default function Movie(props) {
  return (
    <Wrapper>
      <img alt={props.title} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} />
    </Wrapper>
  );
}
