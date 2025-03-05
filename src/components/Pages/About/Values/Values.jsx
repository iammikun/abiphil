import React, { useEffect } from "react";
import classes from "./Values.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.valueContainer}>
      <div className={classes.valueWrapper} data-aos="fade-down">
        <h2>Company Values</h2>
        <p>Why are these our values?</p>
        <div className={classes.valueTrust} data-aos="fade-down">
          <div className={classes.valueContent}>
            <h2>Trust</h2>
            <p>
              Central to Abiphil's mission is trust. We believe in cultivating
              trust-filled relationships that serve as the bedrock for enduring
              partnerships.
            </p>
          </div>
        </div>
        <div className={classes.valueTrustTwo} data-aos="fade-down">
          <div className={classes.valueContent}>
            <h2>Sustainable impact</h2>
            <p>
              Each partnership is a testament to our collaborative spirit,
              underpinned by a mutual commitment to sustainability.
            </p>
          </div>
        </div>
        <div className={classes.valueTrustThree} data-aos="fade-down">
          <div className={classes.valueContent}>
            <h2>Trust</h2>
            <p>
              Central to Abiphil's mission is trust. We believe in cultivating
              trust-filled relationships that serve as the bedrock for enduring
              partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
