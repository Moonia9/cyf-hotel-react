import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    //console.log(event.target.value);
    setSearchInput(event.target.value);
  }
  const onSearch = () => {
    props.search(document.getElementById("customerName").value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.search(searchInput); //search={search} prop provided in Bookings.js
  };

  const customerName = onShowProfile => {
    //console.log(event.target.value);
    console.log(document.getElementById("customerName").value);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={customerName}
                onChange={handleSearchInput}
              />
              <SearchButton onSearch={onSearch} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
