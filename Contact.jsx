import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>adinathgaware23072003@gmail.com</li>
          <li>+91 7822901803</li>
          <li>
            You can reach out me though LinkedIn Twitter Threads Instagram
          </li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;
