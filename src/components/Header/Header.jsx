import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check which page is active
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact-us";

  return (
    <div
      className={`${classes.headerContainer} ${
        isAboutPage
          ? classes.aboutPage
          : isContactPage
          ? classes.contactPage
          : ""
      }`}
    >
      <div
        className={`${classes.headerWraper} ${
          scrolling ? classes.scrolled : classes.default
        }`}
      >
        <header className={classes.header}>
          <h1 className={classes.logo}>abiphil</h1>
          <nav className={classes.navbar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact</Link>
          </nav>
          <Link to="/contact-us" className={classes.headerBtn}>
            <button>Get in Touch</button>
          </Link>
        </header>
      </div>

      {/* Hero Sections */}
      {!isAboutPage && !isContactPage ? (
        <div className={classes.heroContent}>
          <h2 className={classes.heroTitle}>
            Welcome to AbiPhil - Your Partner in Sustainable Agriculture
          </h2>
          <p className={classes.heroText}>
            At AbiPhil, we sell solutions and build sustainable agricultural
            ecosystems that ensure food security, profitability, and a greener
            planet.
          </p>
          <Link to="/about" className={classes.heroButton}>
            Find Out More
          </Link>
        </div>
      ) : isAboutPage ? (
        <div className={classes.aboutHero}>
          <p>
            We are dedicated to transforming the agricultural industry by
            introducing innovative solutions that enhance productivity,
            sustainability, and long-term growth. Our approach focuses on
            integrating cutting-edge technology, research-driven strategies, and
            environmentally friendly practices to empower farmers,
            agribusinesses, and communities.
          </p>
        </div>
      ) : isContactPage ? (
        <div className={classes.contactHero}>
          <h2>Contact Us</h2>
          <p>
            Have questions? We’d love to hear from you! Whether it's a business
            inquiry, partnership opportunity, or general support, our team is
            ready to help.
          </p>
          <p className={classes.pee}>
            Email: support@abiphil.com | Phone: +234 801 234 5678
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
