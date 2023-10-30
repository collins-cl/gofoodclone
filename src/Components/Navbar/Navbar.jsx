import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaPlus } from "react-icons/fa";

import { LiaTimesSolid } from "react-icons/lia";
import { BsSearch, BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const location = useLocation();
  const hiddenPaths = [ "/search",
  "/search-result"]
  const ref = useRef();

  const [open, setOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [isempty, setIsEmpty] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const openNav = () => setOpen(true);
  const closeNav = () => setOpen(false);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  //adds and removes event listeners for the dropdown menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("resize", handleResize);
    };

    // const handleResize = () => setIsMobile(window.innerWidth <= 768);

    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left-float">
          <div className="logo">
            <FaBars onClick={openNav} className="hamburger" />

            <Link to="/">
              <img src={Logo} width={110} alt="" />
            </Link>
          </div>

          <div className={open ? "mobile-nav" : "navlinks"}>
            <LiaTimesSolid className="close-menu" onClick={closeNav} />
            <img src={Logo} alt="" />

            <NavLink exact activeClassName="active" to="/" onClick={closeNav}>
              Home
            </NavLink>

            <NavLink
              exact
              activeClassName="active"
              to="/recommendation"
              onClick={closeNav}
            >
              Recommendations
            </NavLink>

            <NavLink onClick={closeNav}>Privacy Policy</NavLink>
            <NavLink onClick={closeNav}>Terms of service</NavLink>
            <NavLink onClick={closeNav}>Download on Appstore</NavLink>
            <NavLink onClick={closeNav}>Log in</NavLink>
          </div>
        </div>

        <div className="right-float">
          {
            (hiddenPaths.includes(location.pathname) ? null : (
              <Link to="/search" className="search">
                <BsSearch className="icon" />
              </Link>
            ))
          }

          <div className="log-in">
            <Link>Log In</Link>
          </div>

          <div className="cart">
            <BsFillCartFill className="icon" onClick={() => setIsOpen(true)} />
            {!isMobile ? (
              isopen ? (
                <div className="cart-bucket-desktop" ref={ref}>
                  {isempty ? (
                    <div className="isempty">
                      <div className="head">Your order</div>

                      <div className="content">
                        <BsFillCartFill className="icon" />
                        <p>
                          Your cart is empty. Let's discover our collections of
                          popular dishes.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="notempty">
                      <div className="head">
                        <div className="left">
                          <h4>Your order</h4>
                          <p>McDonald's, Senayan Trade Center</p>
                        </div>

                        <div
                          className="add-more-btn"
                          onClick={() => setIsOpen(false)}
                        >
                          <FaPlus className="icon" />
                          Add more
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : null
            ) : (
              "vv "
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
