import React from "react";
import classes from "./Boss.module.css";
import aboutImg from "../../../../Images/aboutImg.jpg";

const Boss = () => {
  return (
    <div className={classes.bossContainer}>
      <div className={classes.bossWrapper}>
        <img src={aboutImg} alt="" />

        <div className={classes.bossText}>
          <h2>
            From small-scale farmers to large commercial enterprises, Abiphil
            provide innovative solutions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Boss;
