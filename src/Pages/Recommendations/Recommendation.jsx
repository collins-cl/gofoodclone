import React from "react";
import "../Recommendations/Recommendation.scss";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Nearme from "../../../public/InspoPng/nearme.png";
import Bestsellers from "../../../public/InspoPng/bestsellers.png";
import Healthy from "../../../public/InspoPng/healthy.png";
import MostL from "../../../public/InspoPng/mostloved.png";
import Promo from "../../../public/InspoPng/promo.png";
import Sunshine from "../../assets/InspoPng/sunshine.png";
import Budget from "../../assets/InspoPng/budget.png";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { DataFiles } from "../../Components/DummyFiles/DataFiles";

const Recommendation = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });

  const navigateHandle = (props) => {
    navigate(`/shop?q=${props}`);
  };

  return (
    <div className="recommendation">
      <div className="wrapper">
        <div className="hero">
          <div className="box">
            <h4>Jakarta Recommendations</h4>
            <p>
              Explore our curated recommendations based on your <br />
              various needs
            </p>
          </div>
        </div>

        <div className="container">
          <div className="routing">
            <Link>Home</Link> / <Link>Jakarta</Link> /{"  "}
            <Link>Recommendations</Link>
          </div>

          <div className="near-me">
            <div className="img">
              <img src={Nearme} width={70} alt="" />
              <p>Near me</p>
            </div>

            <div className="content-wrapper">
              {DataFiles &&
                DataFiles.slice(5, 9).map((item, id) => (
                  <div
                    className="content"
                    key={id}
                    onClick={() => {
                      navigateHandle(item.foodCategory);
                    }}
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
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="show-all">
              <Link>Show all restos</Link>
            </div>
          </div>

          <div className="near-me">
            <div className="img">
              <img src={Bestsellers} width={70} alt="" />
              <p>Best sellers</p>
            </div>

            <div className="content-wrapper">
              {DataFiles &&
                DataFiles.slice(0, 4).map((item, id) => (
                  <div
                    className="content"
                    key={id}
                    onClick={() => {
                      navigateHandle(item.foodCategory);
                    }}
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
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="show-all">
              <Link>Show all restos</Link>
            </div>
          </div>

          <div className="near-me">
            <div className="img">
              <img src={Budget} width={70} alt="" />
              <p>Budget meal</p>
            </div>

            <div className="content-wrapper">
              {DataFiles &&
                DataFiles.slice(10, 14).map((item, id) => (
                  <div
                    className="content"
                    key={id}
                    onClick={() => {
                      navigateHandle(item.foodCategory);
                    }}
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
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="show-all">
              <Link>Show all restos</Link>
            </div>
          </div>

          <div className="near-me">
            <div className="img">
              <img src={MostL} width={70} alt="" />
              <p>Most loved</p>
            </div>

            <div className="content-wrapper">
              {DataFiles &&
                DataFiles.slice(15, 19).map((item, id) => (
                  <div
                    className="content"
                    key={id}
                    onClick={() => {
                      navigateHandle(item.foodCategory);
                    }}
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
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="show-all">
              <Link>Show all restos</Link>
            </div>
          </div>

          <div className="near-me">
            <div className="img">
              <img src={Sunshine} width={70} alt="" />
              <p>24 hours</p>
            </div>

            <div className="content-wrapper">
              {DataFiles &&
                DataFiles.slice(20, 24).map((item, id) => (
                  <div
                    className="content"
                    key={id}
                    onClick={() => {
                      navigateHandle(item.foodCategory);
                    }}
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
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="show-all">
              <Link>Show all restos</Link>
            </div>
          </div>

          <div className="near-me">
            <div className="img">
              <img src={Healthy} width={70} alt="" />
              <p>Healthy food</p>
            </div>

            <div className="content-wrapper">
              {DataFiles &&
                DataFiles.slice(26, 30).map((item, id) => (
                  <div
                    className="content"
                    key={id}
                    onClick={() => {
                      navigateHandle(item.foodCategory);
                    }}
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
                          <p>{item.randomValue2}km</p>
                        </div>

                        <div className="dot"></div>

                        <div className="price">
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="show-all">
              <Link>Show all restos</Link>
            </div>
          </div>

          <div className="near-me">
            <div className="img">
              <img src={Promo} width={70} alt="" />
              <p>Pasta ada promo</p>
            </div>

            <div className="content-wrapper">
              {DataFiles &&
                DataFiles.slice(13, 17).map((item, id) => (
                  <div
                    className="content"
                    key={id}
                    onClick={() => {
                      navigateHandle(item.foodCategory);
                    }}
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
                          <p>{item.randomValue2}km</p>
                        </div>

                        <div className="dot"></div>

                        <div className="price">
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                          <BsCurrencyDollar className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="show-all">
              <Link>Show all restos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
