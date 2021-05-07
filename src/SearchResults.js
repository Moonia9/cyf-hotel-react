import React from "react";
//import moment from "./moment"

const SearchResults = properties => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Hotel</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room Number</th>
          <th scope="col">Check In</th>
          <th scope="col">Check Out</th>
        </tr>
      </thead>
      <tbody>
        {properties.bookings.map(element => (
          <tr key={element.id}>
            <td>{element.title}</td>
            <td>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.email}</td>
            <td>{element.roomId}</td>
            <td>{element.checkInDate}</td>
            <td>{element.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// function getDays(startDate, endDate) {
//   var a = moment(startDate);
//   var b = moment(endDate);
//   a.diff(b)
// }

export default SearchResults;
