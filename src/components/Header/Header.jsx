import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerWraper}>
        <header className={classes.header}>
          <h1 className={classes.logo}>abiphil</h1>
          <nav className={classes.navbar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/platform">Platform</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <hr />
        {/* Hero Content */}
        <div className={classes.heroContent}>
          <div>
            <h2 className={classes.heroTitle}>
              Welcome to AbiPhil - Your Partner in Sustainable Agriculture
            </h2>
            <p className={classes.heroText}>
              At AbiPhil, we sell solutions and build sustainable agricultural
              ecosystems that ensure food security, profitability, and a greener
              planet. Whether you are looking to optimize your farm, upgrade
              your equipment, or set up a world-class agribusiness, we are your
              trusted partner.
            </p>
            <Link to="/find-out-more" className={classes.heroButton}>
              Find Out More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
