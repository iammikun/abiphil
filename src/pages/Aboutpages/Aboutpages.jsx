import React from "react";
import Boss from "../../components/Pages/About/Boss/Boss";
import AboutService from "../../components/Pages/About/AboutService/AboutService";
import Team from "../../components/Pages/About/Team/Team";
import Values from "../../components/Pages/About/Values/Values";

const Aboutpages = () => {
  return (
    <div>
      <div>
        <Boss />
        <AboutService />
        <Team />
        <Values />
      </div>
    </div>
  );
};

export default Aboutpages;
