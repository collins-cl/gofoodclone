import React from "react";
import Hero from "../../Components/Hero/Hero";
import Inspo from "../../Components/Inspo/Inspo";
import Cuisine from "../../Components/Cuisines/Cuisine";
import Menu from "../../Components/Menu/Menu";
import WhyUs from "../../Components/WhyUs/WhyUs";
import CityList from "../../Components/CityList/CityList";

const Home = () => {
  return (
    <div>
      <Hero />
      <Inspo />
      <Cuisine />
      <Menu />
      <WhyUs />
      <CityList />
    </div>
  );
};

export default Home;
