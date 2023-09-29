import React, { useState, useEffect } from "react";
import "../Search/Search.scss";
import { BsSearch } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { MenuRoute } from "../../Components/DummyFiles/MenuRoute";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const menu = MenuRoute;
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [matched, setMatched] = useState("");
  const [searchhistory, setSearchHistory] = useState("");
  const [cancel, setCancel] = useState(false);

  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);
  }

  const handleSearchHistory = () => {
    setCancel(true);
    localStorage.removeItem("searchData");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const isMatch = menu.find((item) => item.type);

      setMatched(isMatch);

      if (inputValue === isMatch.type) {
        console.log("yes");
        setSearchHistory(inputValue);
        localStorage.setItem("searchData", isMatch.type);
        navigate(`/restaurants/${inputValue}`);
      } else {
        console.log(inputValue);
        console.log(matched);
        console.log("no");
        navigate("/404")
      }
    }
  };

  return (
    <div className="search-page">
      <div className="wrapper">
        <div className="input">
          <BsSearch className="search-icon" />
          <input
            type="text"
            placeholder="What would you like to eat ?"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <LiaTimesSolid className="cancel-icon" />
        </div>

        <div className="head">Your search history</div>

        <div className="search-history">
          {cancel ? null : (
            <div className="container">
              <p>{localStorage.getItem("searchData")}</p>
              <LiaTimesSolid className="icon" onClick={handleSearchHistory} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
