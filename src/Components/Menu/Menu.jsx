import React from "react";
import "../Menu/Menu.scss";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { MenuRoute } from "../DummyFiles/MenuRoute";

const Menu = () => {
  return (
    <div className="menu">
      <div className="wrapper">
        <div className="head">What’s good to eat in Cilandak?</div>

        <div className="info">
          Discover our collection of popular dishes, local favorites, and best
          deals in your neighborhood.
        </div>

        <div className="container">
          {MenuRoute &&
            MenuRoute.slice(0, 8).map((item, id) => (
              <div className="content" key={id}>
                <div className="img">
                  <img src={`https://picsum.photos/id/${item.image}/270/230`} alt="" />
                  <div className="star">
                    <FaStar className="icon" />
                    <p>{item.rating}</p>
                  </div>
                </div>

                <div className="title">{item.name}</div>

                <div className="type">{item.type}</div>

                <div className="dist-price">
                  <div className="distance">
                    <FaLocationDot className="icon" />
                    <p>{item.distance}km</p>
                  </div>

                  <div className="dot"></div>

                  <div className="price">
                    {}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
