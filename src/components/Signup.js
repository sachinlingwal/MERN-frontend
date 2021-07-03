import React, { useState } from "react";
import "./Signup.css";
import Button from "@material-ui/core/Button";
import { NavLink, useHistory } from "react-router-dom";
import register from "../images/register.jpg";
const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    // console.log(e.target.value);

    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("invalid registration");
      console.log("invalid registration");
    } else {
      window.alert("Registration Successful");
      console.log("Successful Registration");
      history.push("/login");
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__left">
          <div className="signup__title">
            <h3>Sign up</h3>
          </div>
          <div>
            <form method="POST" className="signup__form">
              <div className="form__group__input">
                <input
                  type="text"
                  id="name"
                  className="name"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="form__group__input">
                <input
                  type="email"
                  id="email"
                  className="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Your Email"
                  name="email"
                />
              </div>
              <div className="form__group__input">
                <input
                  type="phone"
                  id="phone"
                  className="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Your Phone"
                  name="phone"
                />
              </div>
              <div className="form__group__input">
                <input
                  type="text"
                  id="work"
                  className="work"
                  value={user.work}
                  onChange={handleInputs}
                  placeholder="Your Profession"
                  name="work"
                />
              </div>
              <div className="form__group__input">
                <input
                  type="password"
                  id="password"
                  className="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Your Password"
                  name="password"
                />
              </div>
              <div className="form__group__input">
                <input
                  type="password"
                  id="cpassword"
                  className="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Your Password"
                  name="cpassword"
                />
              </div>
              <div className="form__group__input">
                <Button
                  className="btn"
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={postData}
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="signup__right">
          <img src={register} alt="" />
          <Button color="primary">
            <NavLink to="/login">Already Registered...Login Here</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
