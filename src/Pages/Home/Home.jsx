import React from "react";
import Hero from "../../Components/Hero/Hero";
import Inspo from "../../Components/Inspo/Inspo";
import Cuisine from "../../Components/Cuisines/Cuisine";
import Menu from "../../Components/Menu/Menu";
import WhyUs from "../../Components/WhyUs/WhyUs";
import CityList from "../../Components/CityList/CityList";
import { ReactTitle } from "react-meta-tags";

const Home = () => {
  return (
    <div>
      <ReactTitle title="GoFood" />
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
