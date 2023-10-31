import React from "react";
import "../Menu/Menu.scss";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { MenuRoute } from "../DummyFiles/MenuRoute";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DataFiles } from "../DummyFiles/DataFiles";

const Menu = () => {
  const navigate = useNavigate();
  function calculateColor(props) {
    if (props >= 1 && props < 2) {
      return "black";
    } else if (props >= 2 && props < 3) {
      return "black";
    } else if (props >= 3 && [props] < 4) {
      return "black";
    } else {
      return "gray";
    }
  }
  const colorValue = MenuRoute.map((item, id) => calculateColor(item.price));

  return (
    <div className="menu">
      <div className="wrapper">
        <div className="head">What’s good to eat in Cilandak?</div>

        <div className="info">
          Discover our collection of popular dishes, local favorites, and best
          deals in your neighborhood.
        </div>

        <div className="container">
          {DataFiles &&
            DataFiles.slice(0, 8).map((item, id) => (
              <div
                className="content"
                key={id}
                onClick={() =>
                  navigate(`/restaurants/near-me/${item.foodCategory}`)
                }
              >
                <div className="img">
                  <img src={item.image} alt="" />
                  <div className="star">
                    <FaStar className="icon" />
                    <p>{item.randomValue2}</p>
                  </div>
                </div>

                <div className="sect-two">
                  <div className="title">{item.foodName}</div>

                  <div className="type">{item.foodCategory}</div>

                  <div className="dist-price">
                    <div className="distance">
                      <FaLocationDot className="icon" />
                      <p>{item.randomValue1}km</p>
                    </div>

                    <div className="dot"></div>

                    <div className="price">
                      <BsCurrencyDollar fill={colorValue} className="icon" />
                      <BsCurrencyDollar className="icon" />
                      <BsCurrencyDollar className="icon" />
                      <BsCurrencyDollar className="icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="show-more">
          <Link to="/restaurants/near-me">Show all restos</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
