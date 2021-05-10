import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      <RestaurantButton onClick={orderOne} />
      <p>
        {props.orderType}: {orders}{" "}
      </p>
    </li>
  );
};

export default Order;
