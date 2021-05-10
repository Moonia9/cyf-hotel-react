import React from "react";

const RestaurantButton = props => {
  return (
    <button
      onClick={props.onClick}
      className="btn btn-outline-secondary bg-light mr-2"
    >
      Add Order
    </button>
  );
};

export default RestaurantButton;
