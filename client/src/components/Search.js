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
    // return (
    //   <input
    //     type='text'
    //     name='name'
    //     style={{ flex: '10', padding: '5px' }}
    //     placeholder='Search card name'
    //     value={this.state.name}
    //     onChange={this.onChange}
    //   />
    // );

    return (
      <Fragment>
        <div class='input-group input-group-lg'>
          <div class='input-group-prepend'>
            <span class='input-group-text' id='inputGroup-sizing-lg'>
              Card Name
            </span>
          </div>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onChange}
            class='form-control'
            aria-label='Large'
            aria-describedby='inputGroup-sizing-sm'
          />
        </div>
      </Fragment>
    );
  }
}

export default Search;
