import React, { Component } from 'react';

class Search extends Component {
  state = {
    name: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.setSearch(e.target.value);
  };

  render() {
    return (
      <input
        type='text'
        name='name'
        style={{ flex: '10', padding: '5px' }}
        placeholder='Search card name'
        value={this.state.name}
        onChange={this.onChange}
      />
    );
  }
}

export default Search;
