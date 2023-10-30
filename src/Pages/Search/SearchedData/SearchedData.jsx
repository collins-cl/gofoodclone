import React, { useEffect, useState } from "react";
import "../SearchedData/SearchedData.scss";
import { useParams, useSearchParams } from "react-router-dom";
import { MenuRoute } from "../../../Components/DummyFiles/MenuRoute";
import Image from "../../../../public/CuisinePng/bako.jpg";

const SearchedData = () => {
  const menu = MenuRoute;
  const [searchParams, setSearchParams] = useSearchParams("");
  const [data, setData] = useState([]);

  const param = searchParams.get("q");

  useEffect(() => {
    const filteredItems = menu.filter((item) => {
      return item.type.split(" ")[0].toLowerCase() === param.toLowerCase();
    });

    setData(filteredItems);

    console.log(filteredItems);
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
                  <img
                    src={`https://picsum.photos/id/${item.image}/230/200`}
                    alt=""
                  />
                </div>

                <div className="name">
                  <p>{item.name}</p>
                </div>

                <div className="details">
                  <div className="type">{item.type}</div>

                  <div className="price">{item.price}$</div>
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
