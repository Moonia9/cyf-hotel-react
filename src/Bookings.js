import React, { useState } from "react";
//import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  let results = [];
  // const [bookings, setBookings] = useState([]);

  // function useState() {
  //   setBookings(bookings);
  // }
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    results = FakeBookings;
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
