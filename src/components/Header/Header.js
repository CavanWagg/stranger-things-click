
import React from "react";
import "./Header.css";

const Header = props => (
    <div className="page-header">
        <h1>Stranger Things Clicky! </h1>
            <p> Click the character images to earn points</p>
            <p> Clicking on the same character more than once will send you into "The Upside Down" </p>
            <p> Score: {props.currentScore} High Score: {props.highScore}</p>
    </div>
)

export default Header;