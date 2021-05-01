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
            url="https://peoplemakeglasgow.com/"
            city_Name="Glasgow"
            description="Glasgow is Scotland's largest city, and it forms an independent council area that lies entirely within the historic county of Lanarkshire. ... The city occupies much of the lower Clyde valley, and its suburbs extend into surrounding districts. Most important commercial and administrative buildings lie north of the Clyde."
          />

          <TouristInfoCards
            img="https://culturezvous.com/wp-content/uploads/2020/01/manchester.jpg"
            url="https://www.visitmanchester.com/"
            city_Name="Manchester"
            description="Manchester is the nucleus of the largest metropolitan area in the north of England, and it remains an important regional city, but it has lost the extraordinary vitality and unique influence that put it at the forefront of the Industrial Revolution."
          />

          <TouristInfoCards
            img="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ihLx.5gnaLfs/v1/-1x-1.jpg"
            url="https://www.visitlondon.com/"
            city_Name="London"
            description="London, city, capital of the United Kingdom. It is among the oldest of the world's great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain's largest metropolis, it is also the country's economic, transportation, and cultural centre."
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
