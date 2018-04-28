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

const Searchbox = styled.div`
  background-color: #fff;
  min-width: 230px;
  border-radius: 5px;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background: none;
  padding: 10px;
  font-size: 0.8em;
`;

function Menu(props) {
  return (
    <Wrapper>
      <Title>njetflix</Title>
      <Searchbox>
        <Input type="search" autocomplete="on" placeholder="Search" />
      </Searchbox>
    </Wrapper>
  );
}

export default Menu;
