import React from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

const ContactUs = (props) => {
  return (
    <div className="contactus">
      <div className="contact__icon">
        <PhoneAndroidIcon />
      </div>
      <div className="contact__info">
        <h4>{props.title}</h4>
        <h4>{props.info}</h4>
      </div>
    </div>
  );
};

export default ContactUs;
