import React from "react";
import classes from "./Clients.module.css";

const Clients = () => {
  return (
    <div className={classes.clientsContainer}>
      <div className={classes.clientsWrapper}>
        <h2>Our Clients & Partners Include</h2>
        <div className={classes.clients}></div>
      </div>
    </div>
  );
};

export default Clients;
