import React from "react";
import "../Error/ErrorPage.scss";
import Logo from "../../assets/whyorderus/second.png";

export const ErrorPage = () => {
  return (
    <div className="error">
      <div className="wrapper">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="head">Hmm, couldn't find what you're looking for</div>

        <div className="details">
          Try searching these keywords [rice, cheese, chocolates, Atlanta,
          LosAngeles, New York] 😉
        </div>
      </div>
    </div>
  );
};
