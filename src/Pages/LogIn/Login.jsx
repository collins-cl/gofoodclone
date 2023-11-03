import React, { useEffect, useState } from "react";
import "../LogIn/Login.scss";
import Image from "../../assets/whyorderus/fourth.png";
import Success from "../../assets/whyorderus/third.png";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("welcome");

  return (
    <div className="login">
      <div className="wrapper">
        <PageDisplay page={page} setPage={setPage} navigate={navigate} />
      </div>
    </div>
  );
};

//this section below handles the login and registrations actions

const PageDisplay = ({ page, setPage, navigate }) => {
  if (page === "welcome") {
    return (
      <div className="div">
        <div className="head">Login to GoFood</div>

        <div className="image">
          <img src={Image} alt="" />
        </div>

        <div className="intro">
          Welcome to GoFood, your no.1 website that meets your requirements
        </div>

        <div className="func">
          <div
            className="log-in"
            onClick={() => {
              setPage("login");
            }}
          >
            Log in
          </div>

          <div
            className="reg"
            onClick={() => {
              setPage("register");
            }}
          >
            I'm new, sign me up!
          </div>
        </div>
      </div>
    );
  } else if (page === "login") {
    return (
      <div className="login-screen">
        <div className="head">
          <p>GoFood</p>

          <div className="prev" onClick={() => setPage("welcome")}>
            back
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="user@email.com" required />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="password" required />
          </div>

          <button type="submit" onClick={() => setPage("login-success")}>
            Log in
          </button>
        </form>

        <div className="google-auth">
          <FaGoogle className="icon" />
          Continue With Google
        </div>
      </div>
    );
  } else if (page === "login-success") {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    return (
      <div className="success">
        <div className="head">Login success!</div>
        <div className="image">
          <img src={Success} alt="" />
        </div>
        <p>Redirecting to home page</p>
      </div>
    );
  } else if (page === "register") {
    return (
      <div className="register-page">
        <div className="head">
          <p>GoFood</p>

          <div className="prev" onClick={() => setPage("welcome")}>
            back
          </div>
        </div>

        <h3>
          Register an account with GoFood and make your deliveries count!.
        </h3>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="names">
            <div className="f-name">
              <label htmlFor="f-name">First name</label>
              <input type="text" name="firstname" placeholder="john" />
            </div>

            <div className="l-name">
              <label htmlFor="l-name">Last name</label>
              <input type="text" name="firstname" placeholder="doe" />
            </div>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="john.doe@gmail.com" />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="*******" />
          </div>

          <button type="submit" onClick={() => setPage("login")}>
            Sign me up!
          </button>
        </form>

        <div className="span">
          <span>or continue with</span>
        </div>

        <div className="google-auth">
          <FaGoogle className="icon" />
          Sign up with Google
        </div>
      </div>
    );
  }
};

export default Login;
