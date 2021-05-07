import React from "react";

const RestaurantButton = properties => {
  return (
    <button
      onClick={properties.onClick}
      className="btn btn-outline-secondary bg-light mr-2"
    >
      Add Order
    </button>
  );
};

export default RestaurantButton;
