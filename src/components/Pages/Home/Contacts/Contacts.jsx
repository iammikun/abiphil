import React from "react";
import classes from "./Contacts.module.css";
import { Link } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";
import { GrLinkNext } from "react-icons/gr";

const Contacts = () => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactWrapper}>
        <Link to="/contact-us" className={classes.call}>
          <h3>Call us or ask a question on a website</h3>
          <p>Personalized support is a click away</p>
          <RiExternalLinkLine className={classes.icon} />
          <div className={classes.link}>
            <Link to="">
              CONTACT US <GrLinkNext />
            </Link>
          </div>
        </Link>
        <a href="mailto:" className={classes.fill}>
          <h3>Fill in the form, or, if you prefer, send us an email</h3>
          <p>We'll get back as soon as possible</p>
          <RiExternalLinkLine className={classes.icon} />
          <div className={classes.link}>
            <a href="mailto:">
              SEND US A MESSAGE <GrLinkNext />
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
