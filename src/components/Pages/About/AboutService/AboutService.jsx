import React, { useEffect } from "react";
import classes from "./AboutService.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutService = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.AboutServiceContainer} data-aos="">
      <div className={classes.AboutServiceWrapper}>
        <div className={classes.servicesCard}>
          <div className={classes.cardOne} data-aos="">
            <h2 className={classes.number}>01</h2>
            <h2>Hydroponic Systems</h2>
            <p>Advanced water-efficient farming with minimal soil use.</p>
          </div>
          <div className={classes.cardTwo} data-aos="fade-down">
            <h2 className={classes.number}>02</h2>
            <h2>Climate Control Technologies</h2>
            <p>Sensors, automated watering, and AI-driven solutions.</p>
            <p></p>
          </div>
          <div className={classes.cardThree} data-aos="fade-down">
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

export default AboutService;
