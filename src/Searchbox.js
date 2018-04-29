import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { search } from './reducers';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <Wrapper>
        <Input type="search"
               autocomplete="on"
               placeholder="Search"
               value={this.props.value}
               onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    search: query => dispatch(search(query))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbox);
