import React from "react";

const SearchResults = () => {
  const array = [
    {
      title: "Marabou Hotel",
      firstName: "Maria",
      lastName: "Pascal",
      email: "example@email.com",
      roomId: "1234",
      checkInDate: "01/07/2021",
      CheckOutDate: "15/07/2021",
      id: "passport"
    }
  ];
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
      {array.map(element => (
        <tbody>
          <tr>
            <td>{element.title}</td>
            <td>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.email}</td>
            <td>{element.roomId}</td>
            <td>{element.checkInDate}</td>
            <td>{element.CheckOutDate}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

// function getDays(startDate, endDate) {
//   var a = moment(startDate);
//   var b = moment(endDate);
//   a.diff(b)
// }

export default SearchResults;
