import React from "react";
import classes from "./Smart.module.css";
import { Link } from "react-router-dom";
import smart from "../../../../Images/WhatsApp Image 2025-02-19 at 05.26.28_2d1a2e22.jpg";

const Smart = () => {
  return (
    <div className={classes.smartContainer}>
      <div className={classes.smartWrapper}>
        <div className={classes.smartText}>
          <button>COMPANY</button>
          <h2>Smart, Sustainable, and High-Yield Farming Solutions</h2>
          <p>
            Transform your farming experience with modern Greenhouse structures
            and hydroponic systems designed for both local and commercial use.
            Our climate-controlled farming solutions ensure year-round
            production, increased efficiency, and higher yields.
          </p>
          <Link to="/about" className={classes.heroButton}>
            Find Out More
          </Link>
        </div>
        <div className={classes.smartImage}>
          <img src={smart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Smart;
