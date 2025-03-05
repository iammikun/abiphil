import React, { useEffect } from "react";
import classes from "./CnP.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CnP = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div className={classes.CnPContainer}>
      <div className={classes.CnPWrapper}>
        <h2>Crafting Sustainable Agriculture & Agri-Tech Solutions</h2>
      </div>
    </div>
  );
};

export default CnP;
