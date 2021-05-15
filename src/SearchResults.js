import React, { useState } from "react";
//import CustomerProfile from "./CustomerProfile";
//import moment from "./moment"

const SearchResults = props => {
  const [activeRow, setActiveRow] = useState("");
  const [customerId, setCustomerId] = useState(null);

  const highlight = () => {
    if (activeRow === "") {
      setActiveRow("active-row");
    } else {
      setActiveRow("");
    }
  };

  const onShowProfile = customerId => {
    console.log("Show profile");
    console.log(customerId);
    setCustomerId(customerId);
  };

  const onClickProfileButton = () => {
    onShowProfile(props.id);
  };
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Hotel</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room Number</th>
          <th scope="col">Check In dates</th>
          <th scope="col">Check Out dates</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(element => (
          <tr onClick={highlight} className={activeRow} key={element.id}>
            <td>{element.title}</td>
            <td>{element.firstName}</td>
            <td>{element.lastName}</td>
            <td>{element.email}</td>
            <td>{element.roomId}</td>
            <td>{element.checkInDate}</td>
            <td>{element.checkOutDate}</td>
            <td>{getDays(element.checkInDate, element.checkOutDate)}</td>
            <th scope="col">
              <button
                className="btn btn-outline-secondary bg-light"
                onClick={onClickProfileButton}
              >
                Show profile
              </button>
            </th>
          </tr>
        ))}
      </tbody>
      {/* <CustomerProfile customerId={}/> */}
    </table>
  );
};

function getDays(startDate, endDate) {
  const testStartDate = new Date(startDate);
  const testEndDate = new Date(endDate);
  const difference = testEndDate.getTime() - testStartDate.getTime();
  //console.log({ differenceinDays: difference / 1000 / 60 / 60 / 24 });

  return difference / 1000 / 60 / 60 / 24;

  // var a = moment(startDate);
  // var b = moment(endDate);
  // console.log(a.diff(b, "days"));
  // return a.diff(b, "days");
}

export default SearchResults;
