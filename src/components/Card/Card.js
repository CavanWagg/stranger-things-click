import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card-container">
    <div className="card" onClick={props.clicked}>
      <div className="img-container">
        <img
          id={props.id}
          className="character-image"
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  </div>
);

export default Card;
