import React from "react";
import Order from "./Order";

const Restaurant = () => {
  //const orderTypes = ["Pizzas", "Salads", "Chocolate cake"]
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {/* {orderTypes.map((orderType) => {
          return (
            <Order orderType={orderType} />
          )
        })} */}
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
