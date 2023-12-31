import React, { useState, useEffect } from "react";
import "../CityList/CityList.scss";
import { LocationDb } from "../DummyFiles/Locationdb";
import { useNavigate } from "react-router-dom";
import { DataFiles } from "../DummyFiles/DataFiles";

const CityList = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="list_of_cities">
      <div className="wrapper">
        <div className="head">Cities with GoFood</div>

        <div className="container">
          {isMobile
            ? DataFiles &&
              DataFiles.slice(0, 10).map((item, id) => (
                <div
                  className="city"
                  key={id}
                  onClick={() => navigate(`/restaurants/${item.location}`)}
                >
                  {item.location}
                </div>
              ))
            : DataFiles &&
              DataFiles.slice(0, 18).map((item, id) => (
                <div
                  className="city"
                  key={id}
                  onClick={() => navigate(`/restaurants/${item.location}`)}
                >
                  {item.location}
                </div>
              ))}
        </div>

        <div
          className="show-more"
          onClick={() => navigate("/restaurants/list")}
        >
          Show all cities
        </div>
      </div>
    </div>
  );
};

export default CityList;
