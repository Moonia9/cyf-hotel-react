import React from "react";

const SearchResults = properties => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Room number</th>
          <th scope="col">Number of days</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{properties.results.id}</td>
          <td>{properties.results.title}</td>
          <td>{properties.results.firstName}</td>
          <td>{properties.results.surname}</td>
          <td>{properties.results.email}</td>
          <td>{properties.results.roomId}</td>
          <td>{properties.results.checkInDate}</td>
          <td>{properties.results.CheckOutDate}</td>
        </tr>
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
