import React, { useEffect, useState } from "react";
import "./About.css";
import { useHistory } from "react-router-dom";
import profile from "../images/profile.png";

const About = () => {
  const [userData, setUserData] = useState({});

  let history = useHistory();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!data.Status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <div className="about">
      <form method="GET">
        <div className="container__about">
          <div className="about__left">
            <img src={profile} alt="" />
            <h5>work link</h5>
            <a href="/">Youtube</a>
            <a href="/">instagram</a>
            <a href="/">facebook</a>
            <a href="/">linkedIN</a>
            <a href="/">Github</a>
          </div>
          <div className="about__right">
            <div className="about__right__top">
              <h5>{userData.name}</h5>
              <p>{userData.work}</p>
            </div>
            <div className="about__right__down">
              <div className="link">
                <a href="/">About</a>
                <a href="/">Timeline</a>
              </div>
              <div className="details">
                <p>userid</p>
                <span>{userData._id}</span>
              </div>
              <div className="details">
                <p>name</p>
                <span>{userData.name}</span>
              </div>
              <div className="details">
                <p>email</p>
                <span>{userData.email}</span>
              </div>
              <div className="details">
                <p>phone</p>
                <span>{userData.phone}</span>
              </div>
              <div className="details">
                <p>Profession</p>
                <span>{userData.work}</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
