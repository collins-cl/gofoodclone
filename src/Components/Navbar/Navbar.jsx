import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { LiaTimesSolid } from "react-icons/lia";
import { BsSearch } from "react-icons/bs";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const location = useLocation();
  const hiddenPaths = ["/search", "/search-result"];

  const [open, setOpen] = useState(false);

  const openNav = () => setOpen(true);
  const closeNav = () => setOpen(false);

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

            <NavLink to="/404" onClick={closeNav}>
              Privacy Policy
            </NavLink>
            <NavLink to="/404" onClick={closeNav}>
              Terms of service
            </NavLink>
            <NavLink to="/404" onClick={closeNav}>
              Download on Appstore
            </NavLink>
            <NavLink to="/404" onClick={closeNav}>
              Log in
            </NavLink>
          </div>
        </div>

        <div className="right-float">
          {hiddenPaths.includes(location.pathname) ? null : (
            <Link to="/search" className="search">
              <BsSearch className="icon" />
            </Link>
          )}

          <div className="log-in">
            <Link>Log In</Link>
          </div>

          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
