import { Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Login.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import register from "../images/register.jpg";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid Details");
    } else {
      dispatch({ type: "USER", payload: true });

      window.alert("login successful");

      history.push("/");
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__left">
          <img src={register} alt="" />
          <Button color="primary">
            <NavLink to="/signup">Create an Account</NavLink>
          </Button>
        </div>
        <div className="login__right">
          <div className="login__title">
            <h1>Sign In</h1>
          </div>
          <form className="signup__form" method="POST">
            <div className="form__group__input">
              <MailOutlineIcon />
              <input
                type="email"
                id="email"
                className="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__group__input">
              <LockOpenIcon />
              <input
                type="password"
                id="password"
                className="password"
                placeholder="Your password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="form__group__input">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={loginUser}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
