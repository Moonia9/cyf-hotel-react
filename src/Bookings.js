//Bookings table - before adding hidden search bar - README.md exercise
import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  //let results = [];
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`).then(response =>
      response
        .json()
        .then(data => {
          setBookings(data);
          //console.log(data);
        })
        .catch(error => {
          console.log(`There has been an error, ${error}`);
        }, [])
    );
  });

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    //if(searchVal)
    //results = FakeBookings;

    setBookings(bookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

//Exercise - hidden search bar added
// import React, { useState } from "react";
// //import React from "react";
// import Search from "./Search.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

// //Adding hidden Search Button
// const Bookings = () => {
//   //let results = [];
//   //const [bookings, setBookings] = useState(FakeBookings);
//   const [bookings, setBookings] = useState([]);

//   const search = (searchVal) => {
//     const guests = FakeBookings;
//     console.info("TO DO!", searchVal);
//     //results = FakeBookings;
//     const filteredGuests = guests.filter((guest) => {
//       return guest.firstName.toLowerCase() === searchVal.toLowerCase();
//     });

//     setBookings(filteredGuests);
//   };

//   return (
//     <div className="App-content">
//       <div className="container">
//         <Search search={search} />
//         <SearchResults bookings={bookings} />
//       </div>
//     </div>
//   );
// };

// export default Bookings;
