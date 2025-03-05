import React, { useEffect } from "react";
import classes from "./Boss.module.css";
import aboutImg from "../../../../Images/aboutImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Boss = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.bossContainer} data-aos="fade-down">
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
