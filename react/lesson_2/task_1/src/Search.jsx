import React from 'react';
import moment from 'moment';

class Search extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  search = event => {
    event.preventDefault();
    console.log(this.state.value);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          className="search__input"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button className="search__button" type="submit" onClick = {() => alert(`Search text: ${this.state.value}`)}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
