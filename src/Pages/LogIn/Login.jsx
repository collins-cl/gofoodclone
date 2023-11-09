import React, { useState } from "react";
import "../LogIn/Login.scss";
import Image from "../../assets/whyorderus/fourth.png";
import Success from "../../assets/whyorderus/third.png";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registrationSchema } from "../../lib/Schema";

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
    const schema = loginSchema;

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
      console.log(data);
      navigate(-1);
    };
    return (
      <div className="login-screen">
        <div className="head">
          <p>GoFood</p>

          <div className="prev" onClick={() => setPage("welcome")}>
            back
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="user@email.com"
              autoComplete="true"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <div className="warning">{errors.email?.message}</div>
            )}
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="password"
              id="password"
              autoComplete="true"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <div className="warning">
                Password must contain a Capital letter, <br />
                A small letter <br />
                And a number
              </div>
            )}
          </div>

          <button type="submit">Log in</button>
        </form>

        <div className="google-auth">
          <FaGoogle className="icon" />
          Continue With Google
        </div>
      </div>
    );
  } else if (page === "login-success") {
    setTimeout(() => {
      navigate(-1);
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
    const schema = registrationSchema;

    const {
      handleSubmit,
      formState: { errors },
      register,
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
      console.log(data);
      navigate(-1);
    };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="names">
            <div className="f-name">
              <label htmlFor="f-name">First name</label>
              <input
                type="text"
                name="firstname"
                {...register("firstName", { required: "true" })}
                placeholder="john"
              />

              {errors.firstName && (
                <div className="warning">{errors.firstName?.message}</div>
              )}
            </div>

            <div className="l-name">
              <label htmlFor="l-name">Last name</label>
              <input
                type="text"
                name="firstname"
                placeholder="doe"
                {...register("lastName", { required: "true" })}
              />

              {errors.lastName && (
                <div className="warning">{errors.lastName?.message}</div>
              )}
            </div>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
              {...register("email", { required: "true" })}
            />

            {errors.email && (
              <div className="warning">{errors.email?.message}</div>
            )}
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="*******"
              {...register("password", { required: "true" })}
            />

            {errors.password && (
              <div className="warning">{errors.password?.message}</div>
            )}
          </div>

          <button type="submit">Sign me up!</button>
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
