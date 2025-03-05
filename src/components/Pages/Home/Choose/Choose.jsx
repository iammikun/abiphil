import React, { useEffect } from "react";
import classes from "./Choose.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Choose = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.AgriContainer}>
      <div className={classes.AgriWrapper} data-aos="fade-down">
        <h2>Why Choose AbiPhil?</h2>
      </div>
    </div>
  );
};

export default Choose;
