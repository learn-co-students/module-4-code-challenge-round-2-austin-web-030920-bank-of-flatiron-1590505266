import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          name="search"
          onChange={() => {
            this.props.handleSearch(this.state.search);
            //wtf am i supposed to pass into handleSearch ??? the input value, right? HOW?
          }}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  };
}

export default Search;
