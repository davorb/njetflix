import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 1em;
  img { border-radius: 5px; }
`

export default function Movie(props) {
  return (
    <Wrapper>
      <Link to={`/movie/${props.id}`}>
        <img alt={props.title} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} />
      </Link>
    </Wrapper>
  );
}
