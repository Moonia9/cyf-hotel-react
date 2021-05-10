import React from "react";

const SearchButton = props => {
  return (
    <button
      className="btn btn-outline-secondary bg-light"
      onClick={props.onSearch}
    >
      Search
    </button>
  );
};
export default SearchButton;
