import React from "react";
import "./App.css";

const TouristInfoCards = properties => {
  return (
    <div className="card mt-5 mb-5 text-center">
      <div className="card">
        <img
          className="card-img-top img-responsive img-thumbnail"
          src={properties.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <p>{properties.description}</p>
          <a
            target="_blank"
            href={properties.url}
            className="btn btn-outline-secondary bg-light"
          >
            Visit {properties.city_Name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
