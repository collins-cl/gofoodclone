import React, { useState } from "react";
import "../Cuisines/Cuisine.scss";
import { NavLink } from "react-router-dom";
import { CuisineRoute } from "../DummyFiles/CuisineRoute";

const Cuisine = () => {
  const [itemstoshow, setItemsToShow] = useState(6);

  const totalItems = CuisineRoute.length;
  return (
    <div className="cuisine">
      <div className="wrapper">
        <div className="head">Choose from cuisines</div>

        <div className="box">
          <div className="container">
            {CuisineRoute &&
              CuisineRoute.slice(0, itemstoshow).map((data, id) => (
                <NavLink to={`/restaurant/${data.route}`} key={id}>
                  <div className="content">
                    <div className="image">
                      <img src={data.img} alt="" />
                    </div>

                    <p>{data.title}</p>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>

        {itemstoshow < totalItems && (
          <div
            className="see-more"
            onClick={() => setItemsToShow(itemstoshow + 6)}
          >
            Show more cuisines
          </div>
        )}
      </div>
    </div>
  );
};

export default Cuisine;
