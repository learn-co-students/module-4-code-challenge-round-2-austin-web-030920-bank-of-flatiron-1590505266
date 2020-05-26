import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          name="search"
          onChange={event => {
            this.props.handleSearch(event);
          }}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  };
}

export default Search;
