import React from "react";
import "../WhyUs/Whyus.scss";
import One from "../../assets/whyorderus/first.png";
import second from "../../assets/whyorderus/second.png";
import third from "../../assets/whyorderus/third.png";
import fourth from "../../assets/whyorderus/fourth.png";

const WhyUs = () => {
  return (
    <div className="whyus">
      <div className="wrapper">
        <div className="head">Why order from GoFood?</div>

        <div className="content">
          <div className="box1">
            <div className="img">
              <img src={One} alt="" />
            </div>

            <p>Countless reviews to go by</p>
          </div>
          <div className="box2">
            <div className="img">
              <img src={second} alt="" />
            </div>

            <p>Order in or pick up from the resto</p>
          </div>
          <div className="box3">
            <div className="img">
              <img src={third} alt="" />
            </div>

            <p>Big deals on all cuisines</p>
          </div>
          <div className="box4">
            <div className="img">
              <img src={fourth} alt="" />
            </div>

            <p>Quick & safe delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
