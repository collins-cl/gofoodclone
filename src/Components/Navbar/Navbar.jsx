import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { LiaTimesSolid } from "react-icons/lia";
import { BsSearch, BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
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

            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>

            <NavLink exact activeClassName="active" to="/recommendation">
              Recommendations
            </NavLink>

            <NavLink>Privacy Policy</NavLink>
            <NavLink>Terms of service</NavLink>
            <NavLink>Download on Appstore</NavLink>
            <NavLink>Log in</NavLink>
          </div>
        </div>

        <div className="right-float">
          <Link to="" className="search">
            <BsSearch className="icon" />
          </Link>

          <div className="log-in">
            <Link>Log In</Link>
          </div>

          <div className="cart">
            <BsFillCartFill className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
