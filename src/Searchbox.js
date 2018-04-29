import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
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

class Searchbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <Wrapper>
        <Input type="search"
               autocomplete="on"
               placeholder="Search"
               value={this.state.value}
               onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

export default Searchbox;
