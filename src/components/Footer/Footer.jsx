import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.FooterContainer}>
      <div className={classes.FooterWrapper}>
        <div className={classes.FooterLogo}>
          <h2>Abiphil</h2>
          <p>
            AbiPhil is at the forefront of sustainable agriculture, empowering
            farmers and agribusinesses with cutting-edge Greenhouses,
            hydroponics farming, and advanced agricultural machinery.
          </p>
        </div>

        <div className={classes.FooterLinks}>
          <div>
            <h4>Stay in Touch</h4>
            <ul>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h4>About Abiphil</h4>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Advantages</li>
              <li>Company Values</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Platform</h4>
            <ul>
              <li>TRACE</li>
              <li>Abiphil Market</li>
              <li>Financial Services</li>
            </ul>
          </div>

          <div>
            <h4>Company Address</h4>
            <p>3b Tiamiyu Savage St, Victoria Island 106104, Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <div className={classes.FooterBottom}>
        <p>2025 Abiphil. All rights reserved.</p>
        <p>Privacy policy. Terms and conditions.</p>
        <p>Design & Dev by: BanQr</p>
      </div>
    </footer>
  );
};

export default Footer;
