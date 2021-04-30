import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="container">
        <div className="row d-flex justify-content-between">
          <TouristInfoCards
            img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/f9/glasgow.jpg?w=1100&h=600&s=1"
            url="peoplemakeglasgow.com"
            city_Name="Glasgow"
          />

          <TouristInfoCards
            img="https://culturezvous.com/wp-content/uploads/2020/01/manchester.jpg"
            url="visitmanchester.com"
            city_Name="Manchester"
          />

          <TouristInfoCards
            img="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ihLx.5gnaLfs/v1/-1x-1.jpg"
            url="visitlondon.com"
            city_Name="London"
          />
        </div>
        <Bookings />
        <Footer
          const
          array={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789"
          ]}
        />
      </div>
    </div>
  );
};

export default App;
