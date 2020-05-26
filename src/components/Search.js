import React from "react";

const Search = props => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        name="search"
        onChange={() => {
          props.handleSearch();
          // i need to put something in the () in 11 to pass to the handleSearch function... in bots we clicked on a bot card
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
