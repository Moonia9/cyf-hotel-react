import React from "react";

const SearchButton = properties => {
  return (
    <button className="btn btn-primary" onClick={properties.onSearch}>
      Search
    </button>
  );
};
export default SearchButton;
