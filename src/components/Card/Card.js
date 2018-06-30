import React, { Component } from "react";
import "./Card.css";

const Card = props => (
  <div className="card-container">
    <div className="card" onClick={props.hasBeenClicked}>
      <div className="img-container">
        <img
          id={props.id}
          className="img-responsive"
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  </div>
);

export default Card;
