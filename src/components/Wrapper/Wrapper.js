import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="container" style= {{width: "900px"}}>
    {props.children}
    </div>
);

export default Wrapper;