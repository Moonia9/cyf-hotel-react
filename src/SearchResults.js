import React from "react";

const SearchResults = properties => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Room number</th>
          <th scope="col">Number of days</th>
        </tr>
      </thead>
      <tbody>
        {/* {properties.results.map((customer) => {
          <tr>
            <td>{customer.id}</td>
            <td>{customer.title}</td>
            <td>{customer.firstName}</td>
            <td>{customer.surname}</td>
            <td>{customer.email}</td>
            <td>{customer.roomId}</td>
            <td>{customer.checkInDate}</td>
            <td>{customer.checkOutDate}</td>
          </tr>;
        })} */}
      </tbody>
    </table>
  );
};

export default SearchResults;
