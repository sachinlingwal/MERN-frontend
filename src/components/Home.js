import React, { useEffect, useState } from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (error) {}
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <h1>{userName}</h1>
        <p>{show ? "Happy , to see you back" : "we are MERN Developer"}</p>

        <Button className="btn" variant="contained" color="primary">
          <NavLink className="btn" to="/about">
            About ME
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Home;
