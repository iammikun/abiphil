import React from "react";
// import Choose from "../../components/Pages/Home/Choose/Choose";
import CnP from "../../components/Pages/Home/CnP/CnP";
import Smart from "../../components/Pages/Home/Smart/Smart";
import About from "../../components/Pages/Home/About/About";
import Tract from "../../components/Pages/Home/Tract/Tract";
import Services from "../../components/Pages/Home/Services/Services";

const Homepages = () => {
  return (
    <div>
      <div>
        <CnP />
        <Smart />
        <About />
        <Tract />
        <Services />
        {/* <Choose /> */}
      </div>
    </div>
  );
};

export default Homepages;
