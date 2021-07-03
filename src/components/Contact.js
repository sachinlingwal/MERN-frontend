import React, { useEffect, useState } from "react";
import ContactUs from "./ContactUs";
import "./Contact.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!data.Status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //! send the data to database
  const contactFrom = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    const res = await fetch("/contact ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();

    if (!data) {
      console.log("message not send");
    } else {
      console.log("message send");
      console.log(userData.message);

      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <div className="contact">
      <div className="contact__container">
        <ContactUs title="Phone Number" info="7895759708" />
        <ContactUs title="Email" info="sachinlingwal48@gmail.com" />
        <ContactUs
          title="Address"
          info="BTM Layout ,Bangalore,Karnataka,India"
        />
      </div>
      <div className="contact__bottom">
        <h4>Get in Touch</h4>
        <form method="POST">
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputs}
            value={userData.name}
            placeholder="name"
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputs}
            value={userData.email}
            placeholder="email"
          />
          <input
            type="Number"
            name="phone"
            id="phone"
            onChange={handleInputs}
            value={userData.phone}
            placeholder="phone"
          />
          <textarea
            name=""
            id=""
            cols="80"
            rows="5"
            name="message"
            placeholder="write a message for me"
            value={userData.message}
            onChange={handleInputs}
          ></textarea>
          <button type="submit" onClick={contactFrom}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
