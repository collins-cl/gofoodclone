import React, { useState, useEffect } from "react";
import "../Search/Search.scss";
import { BsSearch } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { MenuRoute } from "../../Components/DummyFiles/MenuRoute";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const menu = MenuRoute;
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const [storedSearches, setHistory] = useState();

  const q = searchParams.get("q");

  const removeItem = (props) => {
    if (storedSearches) {
      // Define the item you want to remove (for example, based on its index)
      const itemToRemove = props; // Change this to the index of the item you want to remove
      const updatedSearches = storedSearches.filter(
        (item) => item.id !== itemToRemove
      );
      localStorage.setItem("q", JSON.stringify(updatedSearches));
    } else {
      console.log("No search history found in localStorage");
    }
  };

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("q")));
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (q === "") {
        console.log("empty");
      } else {
        const filteredMenu = menu.filter((el) => {
          return el.type.toLowerCase().includes(q.toLowerCase());
        });

        if (filteredMenu.length > 0) {
          const query = filteredMenu[0].type.split(" ")[0].toLowerCase();
          if (query === q.toLowerCase()) {
            if (storedSearches) {
              // If there's an existing search history, add the new query to it
              const updatedSearches = [...storedSearches, { query }];
              localStorage.setItem("q", JSON.stringify(updatedSearches));
            } else {
              // If there's no existing search history, create a new array with the current query
              const newSearches = [query];
              localStorage.setItem("q", JSON.stringify(newSearches));
            }

            navigate(`/search-result?q=${query}`);
          } else {
            console.log("no");
          }
        } else {
          console.log("no matching items in the menu");
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
            onChange={(e) =>
              setSearchParams(
                (prev) => {
                  prev.set("q", e.target.value);
                  return prev;
                },
                { replace: "true" }
              )
            }
            onKeyDown={handleKeyDown}
          />
          <LiaTimesSolid className="cancel-icon" />
        </div>

        <div className="head">Your search history</div>

        <div className="search-history">
          {storedSearches &&
            storedSearches.map((item) => (
              <div className="container" key={item.id}>
                <p>{item.query}</p>
                <LiaTimesSolid
                  className="icon"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
