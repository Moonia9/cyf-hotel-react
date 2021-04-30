import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="container">
        <div className="row d-flex justify-content-between">
          <TouristInfoCards
            img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/f9/glasgow.jpg?w=1100&h=600&s=1"
            url="peoplemakeglasgow.com"
            name="Glasgow"
          />

          <TouristInfoCards
            img
            src="https://culturezvous.com/wp-content/uploads/2020/01/manchester.jpg"
            url="visitmanchester.com"
            name="Manchester"
          />

          <TouristInfoCards
            img
            src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ihLx.5gnaLfs/v1/-1x-1.jpg"
            url="visitlondon.com"
            name="London"
          />
        </div>
      </div>

      <Bookings />
    </div>
  );
};

export default App;
