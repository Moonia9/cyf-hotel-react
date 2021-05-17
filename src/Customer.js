import React, { useState } from "react";
//import moment from "moment";

const Customer = ({ customer, onShowProfile }) => {
  const [activeRow, setActiveRow] = useState("");

  const highlightRow = () => {
    if (activeRow === "") {
      setActiveRow("active-row");
    } else {
      setActiveRow("");
    }
  };

  //Or using information from moment.js
  // function getDays(startDate, endDate) {
  //   var a = moment(endDate);
  //   var b = moment(startDate);

  //   return a.diff(b, "days");
  // }

  const onClickProfileButton = () => {
    onShowProfile(customer.id);
  };

  return (
    <tr className={activeRow}>
      <td onClick={highlightRow}>{customer.firstName}</td>
      <td onClick={highlightRow}>{customer.surname}</td>
      <td>{customer.roomId}</td>
      <td>{getDays(customer.checkInDate, customer.checkOutDate)}</td>
      <td>
        <button
          className="btn btn-outline-secondary bg-light"
          onClick={onClickProfileButton}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

function getDays(startDate, endDate) {
  const testStartDate = new Date(startDate);
  const testEndDate = new Date(endDate);
  const difference = testEndDate.getTime() - testStartDate.getTime();
  //console.log({ differenceinDays: difference / 1000 / 60 / 60 / 24 });

  return difference / 1000 / 60 / 60 / 24;
}

export default Customer;
