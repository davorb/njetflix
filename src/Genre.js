import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Pill = styled.div`
  background-color: ${props => props.selected ? '#e50914' : '#f5f5f1'};
  color: #221f1f;
  margin: 0.2em;
  padding: 0.4em;
  border-radius: 5px;
  text-transform: lowercase;
`;

function Genre(props) {
  return (
    <Pill selected={props.selected} onClick={props.onClick}>
      {props.name}
    </Pill>
  );
}

Genre.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default Genre;
