import React from "react";

const TouristInfoCards = properties => {
  return (
    <div className="card mt-3 text-center">
      <img className="card-img-top" src={properties.img} alt="Card image cap" />
      <div className="card-body">
        <a href={properties.url}>Go to {properties.name}</a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
