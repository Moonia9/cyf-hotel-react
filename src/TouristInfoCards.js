import React from "react";

const TouristInfoCards = properties => {
  return (
    <div className="card mt-3 text-center">
      <div className="card">
        <img
          className="card-img-top img-responsive img-thumbnail"
          src={properties.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <button type="button" class="btn btn-outline-secondary bg-light">
            <a href={properties.url}>Go to {properties.city_Name}</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
