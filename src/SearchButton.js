import React from "react";

const SearchButton = properties => {
  return (
    <button
      className="btn btn-outline-secondary bg-light"
      onClick={properties.onSearch}
    >
      Search
    </button>
  );
};
export default SearchButton;
