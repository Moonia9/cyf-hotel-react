import React from "react";
import "./App.css";

const TouristInfoCards = props => {
  return (
    <div className="card mt-5 mb-5 text-center">
      <div className="card">
        <img
          className="card-img-top img-responsive img-thumbnail"
          src={props.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <p>{props.description}</p>
          <a href={props.url} className="btn btn-outline-secondary bg-light">
            Visit {props.city_Name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
