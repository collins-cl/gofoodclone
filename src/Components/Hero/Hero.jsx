import React, { useState, useEffect } from "react";
import "../Hero/Hero.scss";
import fork from "../../assets/fork.svg";
import {
  MdLocationOn,
  MdKeyboardArrowDown,
  MdOutlineMyLocation,
} from "react-icons/md";
import { LocationDb } from "../DummyFiles/Locationdb";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import "../Hero/customModal.css";
import { LiaTimesSolid } from "react-icons/lia";

const Hero = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClose = () => {
    setOpen(false);
  };

  const handleLocationdb = (props) => {
    setQ(props.city);
    setOpen(false);
  };

  const filteredData = LocationDb.filter((el) => {
    if (q === "") {
      return;
    } else {
      return el.city.toLowerCase().includes(q);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${q}/restaurants`);
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
          <form>
            <div className="input">
              <MdLocationOn className="tag" />
              <input
                type="text"
                name="location"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onClick={() => setOpen(true)}
                placeholder="Enter your location"
              />
              <MdKeyboardArrowDown className="arrow" />
            </div>

            <button type="submit">Explore</button>
          </form>

          <div className="modal">
            <div className="wrap">
              {isMobile && open ? (
                <Modal open={open} onClose={handleClose}>
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
                          value={q}
                          onChange={(e) => setQ(e.target.value)}
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

{
  /* {filteredData.length <= 0 ? (
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
                          {data.street_number}, {data.state_abrev} {data.street}
                          ,{data.city}, {data.state}
                        </p>
                      </div>
                    </div>
                  ))
                )} */
}
