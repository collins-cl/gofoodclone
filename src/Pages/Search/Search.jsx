import React, { useState, useEffect } from "react";
import "../Search/Search.scss";
import { BsSearch } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DataFiles } from "../../Components/DummyFiles/DataFiles";

const Search = () => {
  const menu = DataFiles;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const [storedSearches, setStoredSearches] = useState(
    JSON.parse(localStorage.getItem("q"))
  );

  const q = searchParams.get("q");

  const removeItem = (query) => {
    localStorage.removeItem("q");
    const updatedSearches = storedSearches.filter(
      (item) => item.query !== query
    );
    setStoredSearches(updatedSearches);
  };

  // const filteredMenu = menu.filter((el) => {
  //   return el.foodCategory.toLowerCase().includes(q.toLowerCase());
  // });

  // const handleSearch = () => {

  // };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (q === "") {
        console.log("empty");
      } else {
        const filteredMenu = menu.filter((el) => {
          return el.foodCategory.toLowerCase().includes(q.toLowerCase());
        });

        if (filteredMenu.length > 0) {
          const query = filteredMenu[0].foodCategory
            .split(" ")[0]
            .toLowerCase();
          if (query === q.toLowerCase()) {
            if (storedSearches) {
              // If there's an existing search history, add the new query to it
              const updatedSearches = [...storedSearches, { query: query }];

              const item = JSON.stringify(localStorage.getItem(q));

              if (item) {
                localStorage.setItem("q", JSON.stringify(updatedSearches));
              }
            } else {
              // If there's no existing search history, create a new array with the current query
              const newSearches = [{ query: query }];
              localStorage.setItem("q", JSON.stringify(newSearches));
            }
            navigate(`/search-result?q=${query}`);
          } else {
            navigate("/404");
          }
        } else {
          navigate("/404");
        }
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
            value={q}
            onChange={(e) => {
              setSearchParams(
                (prev) => {
                  prev.set("q", e.target.value);
                  return prev;
                },
                { replace: "true" }
              );
            }}
            onKeyDown={handleKeyDown}
          />
          <LiaTimesSolid className="cancel-icon" />

          {/* {q.length >= 1 ? (
            <div className="search-options">
              {filteredMenu.map((item) => (
                <div className="box">
                  <p>{item.foodName}</p>

                  <span>{item.foodCategory}</span>
                </div>
              ))}
            </div>
          ) : null} */}
        </div>

        <div className="avail-search">
          <p>Items available for search:</p>{" "}
          <span>rice, cheese, and chocolates 😇</span>
        </div>

        <div className="head">Your search history</div>

        <div className="search-history">
          {storedSearches &&
            storedSearches.map((item) => (
              <div className="container" key={item.id}>
                <p onClick={() => navigate(`/search-result?q=${q}`)}>
                  {item.query}
                </p>
                <LiaTimesSolid
                  className="icon"
                  onClick={() => removeItem(item.query)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
