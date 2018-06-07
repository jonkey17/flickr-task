import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }

    this.handleInputValueChange = this.handleInputValueChange.bind(this);
  }

  handleInputValueChange(event) {
    this.setState({searchValue: event.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={(event) => {
            event.preventDefault();
            if (this.state.searchValue) {
              this.props.onSearch(this.state.searchValue);
            }
          }}>
          <input className="SearchInput"
          type="text"
          placeholder="Search by tags"
          value={this.state.searchValue}
          onChange={this.handleInputValueChange} />
        </form>
      </div>
    )
  }
}

export default SearchBar;