import React, { useContext } from "react";
import "./Navbar.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { NavLink } from "react-router-dom";

import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Registration</NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <div className="navbar">
      <div className="social__media">
        <div className="social__media__left">
          <NavLink className="social__media__left__icon" to="/">
            <EmailIcon />
            <h5>sachinlingwal48@gmail.com</h5>
          </NavLink>

          <NavLink className="social__media__left__icon" to="/">
            <PhoneIcon />
            <h5>+91-7895729708</h5>
          </NavLink>
        </div>

        <div className="social__media__right">
          <NavLink to="/">
            <TwitterIcon />
          </NavLink>
          <NavLink to="/">
            <InstagramIcon />
          </NavLink>
          <NavLink
            to={{ pathname: "https://www.linkedin.com/in/sachinlingwal/" }}
            target="_blank"
          >
            <LinkedInIcon />
          </NavLink>
          <NavLink to="/">
            <FacebookIcon />
          </NavLink>
        </div>
      </div>

      <div className="navbar__container">
        <div className="nav__left">
          <h1>SACHIN</h1>
        </div>

        <div className="nav__right">
          <ul className="nav__right__items">
            <RenderMenu />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
