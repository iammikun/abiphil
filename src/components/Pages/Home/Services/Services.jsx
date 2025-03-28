import React from "react";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <div className={classes.servicesContainer}>
      <div className={classes.servicesWrapper}>
        <h2>
          Abiphil's supply top-quality farming and rice-processing machinery,
          ensuring you have the right tools to increase efficiency and
          profitability.
        </h2>
        <div className={classes.servicesCard}>
          <div className={classes.cardOne}>
            <h2 className={classes.number}>01</h2>
            <h2>Hydroponic Systems</h2>
            <p>Advanced water-efficient farming with minimal soil use.</p>
          </div>
          <div className={classes.cardTwo}>
            <h2 className={classes.number}>02</h2>
            <h2>Climate Control Technologies</h2>
            <p>Sensors, automated watering, and AI-driven solutions.</p>
            <p></p>
          </div>
          <div className={classes.cardThree}>
            <h2 className={classes.number}>03</h2>
            <h2>Training & Consultation</h2>
            <p>
              Get expert advice on starting and managing your hydroponic farm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
