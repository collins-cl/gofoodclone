import React, { useEffect, useState } from "react";
import "../SearchedData/SearchedData.scss";
import { useParams, useSearchParams } from "react-router-dom";
import { DataFiles } from "../../../Components/DummyFiles/DataFiles";

const SearchedData = () => {
  const menu = DataFiles;
  const [searchParams, setSearchParams] = useSearchParams("");
  const [data, setData] = useState([]);

  const param = searchParams.get("q");

  useEffect(() => {
    const filteredItems = menu.filter((item) => {
      return (
        item.foodCategory.split(" ")[0].toLowerCase() === param.toLowerCase()
      );
    });

    setData(filteredItems);
  }, []);

  return (
    <div className="s-data-searched">
      <div className="wrapper">
        <div className="head">
          <p>Matching Meal:</p>
        </div>

        <div className="container">
          {data &&
            data.map((item) => (
              <div className="box" key={item.id}>
                <div className="img">
                  <img src={item.image} alt="" />
                </div>

                <div className="name">
                  <p>{item.foodName}</p>
                </div>

                <div className="details">
                  <div className="type">{item.foodCategory}</div>

                  <div className="price">{item.price} USD</div>
                </div>

                <div className="add">Add to cart</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchedData;
