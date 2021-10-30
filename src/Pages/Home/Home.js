import React from "react";
import About from "../About/About";
import AdventureTours from "../AdventureTours/AdventureTours";
import Banner from "../Banner/Banner";
import PopularExcursions from "../PopularExcursions/PopularExcursions";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <PopularExcursions></PopularExcursions>
      <AdventureTours> </AdventureTours>
      <About></About>
    </div>
  );
};

export default Home;
