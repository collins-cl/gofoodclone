import React from "react";
import "../Shop/Shop.scss";
import Image from "../../assets/whyorderus/fourth.png";
import { useSearchParams } from "react-router-dom";
import { DataFiles } from "../../Components/DummyFiles/DataFiles";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  const filteredData = DataFiles;

  return (
    <div className="shop">
      <div className="shop-w">
        <div className="intro">Welcome to GoFood Shop</div>

        <p>
          where your entirety of eateries are served!. Select from the wide
          range of food item available and place an order
        </p>

        <div className="matching-location">
          <div className="head">Here are your searches matched by query:</div>

          <div className="container">
            <ContainerContent data={filteredData} query={query} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

export const ContainerContent = ({ data, query }) => {
  return data.map((item) => {
    //this checks if the items in the array matches the query provided by the URL validatory by location only
    if (item.location.toLocaleLowerCase() === query.toLocaleLowerCase()) {
      return (
        <div className="box">
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
      );
    }

    //this checks if the items in the array matches the query provided by the URL validatory by foodCategory only
    if (item.foodCategory.toLocaleLowerCase() === query.toLocaleLowerCase()) {
      return (
        <div className="box">
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
      );
    }
  });
};
