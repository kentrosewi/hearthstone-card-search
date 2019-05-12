import React, { Component, Fragment } from 'react';

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
      <Fragment>
        <div className='input-group input-group-lg'>
          <div className='input-group-prepend'>
            <span className='input-group-text' id='inputGroup-sizing-lg'>
              Card Name
            </span>
          </div>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onChange}
            className='form-control'
            aria-label='Large'
            aria-describedby='inputGroup-sizing-sm'
          />
        </div>
      </Fragment>
    );
  }
}

export default Search;
