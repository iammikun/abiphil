import { useEffect } from "react";
import React from "react";
import classes from "./ContactFrom.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactFrom = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactForm} data-aos="fade-down">
        <p>Write a message to us</p>
        <form action="">
          <input type="text" placeholder="Your Name" />
          <input type="number" placeholder=" Phone Number" />
          <input type="email" placeholder="Email" />
          <textarea
            name="Your message"
            id=""
            placeholder="Your message"
          ></textarea>
          <Link to="mailto:" className={classes.contactBtn}>
            <button>Send</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
