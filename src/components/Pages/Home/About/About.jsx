import React from "react";
import classes from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutWrapper}>
        <div className={classes.about}>
          <hr />
          <p>ABOUT ABIPHIL</p>
        </div>
        <div className={classes.about}>
          <hr className={classes.rule} />
          <h2>
            Greenhouse Setup – Custom-built structures for controlled
            environment agriculture.
          </h2>
          <Link to="/find-out-more" className={classes.heroButton}>
            Find Out More
          </Link>
          <div className={classes.pee}>
            <p>
              Hydroponic Systems – Advanced water-efficient farming with minimal
              soil use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
