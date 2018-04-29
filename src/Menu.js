import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #e50914;
  padding: 1em;
  display: flex;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.8em;
  width: 100%;
`;

function Menu(props) {
  return (
    <Wrapper>
      <Title>njetflix</Title>
      {props.children}
    </Wrapper>
  );
}

export default Menu;
