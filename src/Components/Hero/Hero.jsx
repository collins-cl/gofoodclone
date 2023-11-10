import React, { useState, useEffect } from "react";
import "../Hero/Hero.scss";
import fork from "../../assets/fork.svg";
import {
  MdLocationOn,
  MdKeyboardArrowDown,
  MdOutlineMyLocation,
} from "react-icons/md";
import { LocationDb } from "../DummyFiles/Locationdb";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import "../Hero/customModal.css";
import { LiaTimesSolid } from "react-icons/lia";
import { DataFiles } from "../DummyFiles/DataFiles";

const Hero = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const [open, setOpen] = useState(false);
  const [openlist, setOpenList] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const query = searchParams.get("q");

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseList = (props) => {
    setSearchParams(
      (prev) => {
        prev.set("q", props.state);
        return prev;
      },
      {
        replace: "true",
      }
    );
    setOpenList(false);
  };

  const handleLocationdb = (props) => {
    setSearchParams(
      (prev) => {
        prev.set("q", props.state);
        return prev;
      },
      {
        replace: "true",
      }
    );
    setOpen(false);
  };

  const filteredData = LocationDb.filter((el) => {
    if (query === "") {
      return;
    } else {
      return el.state.toLowerCase().includes(query.toLocaleLowerCase());
    }
  });

  //handles searching of inputted query string and redirecting to matched location from db
  const searchQuery = (e) => {
    e.preventDefault();
    if (query === "") {
      console.log("empty");
    } else {
      const filteredMenu = DataFiles.filter((el) => {
        return el.location.toLowerCase().includes(query.toLowerCase());
      });

      if (filteredMenu.length > 0) {
        const querystring = filteredMenu[0].location;
        if (querystring.toLowerCase() === query.toLowerCase()) {
          if (query.split(" ")[1]) {
            navigate(`/shop?q=${query.split(" ")[0] + query.split(" ")[1]}`);
          } else {
            navigate(`/shop?q=${query.split(" ")[0]}`);
          }
        } else {
          navigate("/404");
        }
      } else {
        navigate("/404");
      }
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="container">
          <img width={90} src={fork} alt="" />

          <div className="h4">Hungry? Just GoFood it</div>

          <p>
            Order your favorite meals here, on our web. As smooth as in the app.
            Same fast delivery. Countless restos to try.
          </p>
        </div>

        <div className="location">
          <p>Your Location</p>
          <form onSubmit={searchQuery}>
            <div className="input">
              <MdLocationOn className="tag" />
              <input
                type="text"
                name="location"
                value={query}
                onChange={(e) => {
                  setSearchParams(
                    (prev) => {
                      prev.set("q", e.target.value);
                      return prev;
                    },
                    {
                      replace: "true",
                    }
                  );
                }}
                onClick={() => {
                  setOpen(true);
                  setOpenList(true);
                }}
                placeholder="Enter your location"
              />
              <MdKeyboardArrowDown className="arrow" />
            </div>

            <button type="submit">Explore</button>
          </form>

          {openlist && (
            <div className="location-list">
              {query <= 0 ? null : (
                <div className="container">
                  {filteredData.length < 1 ? (
                    <div className="geo-location">
                      <p>Use your current location</p>
                      <MdOutlineMyLocation className="icon" />
                    </div>
                  ) : (
                    filteredData.map((data, id) => (
                      <div
                        className="list-item"
                        key={id}
                        onClick={() => {
                          handleCloseList(data);
                          setOpenList(false);
                        }}
                      >
                        <MdLocationOn className="icon" />
                        <div className="item">
                          <div className="head">
                            {data.state} {data.city}
                          </div>
                          <p>
                            {data.street_number}, {data.state_abrev}{" "}
                            {data.street},{data.city}, {data.state}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}

          <div className="modal">
            <div className="wrap">
              {isMobile && open ? (
                <Modal
                  open={open}
                  onClose={handleClose}
                  sx={{ background: "rgba(85, 83, 83, 0.576)" }}
                >
                  <div className="custom-modal">
                    <div className="custom-modal-header">
                      <p>Select your location</p>

                      <span onClick={handleClose}>
                        <LiaTimesSolid style={{ fontSize: "22px" }} />
                      </span>
                    </div>

                    <div className="modal-content">
                      <div className="input">
                        <MdLocationOn className="tag" />
                        <input
                          type="text"
                          name="location"
                          value={query}
                          onChange={(e) => {
                            setSearchParams(
                              (prev) => {
                                prev.set("q", e.target.value);
                                return prev;
                              },
                              {
                                replace: "true",
                              }
                            );
                          }}
                          onClick={() => setOpen(true)}
                          placeholder="Enter your location"
                        />
                      </div>

                      <div className="content">
                        {filteredData.length <= 0 ? (
                          <div className="geo-location">
                            <p>Use your current location</p>
                            <MdOutlineMyLocation className="icon" />
                          </div>
                        ) : (
                          filteredData.map((data, id) => (
                            <div
                              className="list-item"
                              key={id}
                              onClick={() => handleLocationdb(data)}
                            >
                              <MdLocationOn className="icon" />
                              <div className="item">
                                <div className="head">
                                  {data.state} {data.city}
                                </div>
                                <p>
                                  {data.street_number}, {data.state_abrev}{" "}
                                  {data.street},{data.city}, {data.state}
                                </p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </Modal>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
