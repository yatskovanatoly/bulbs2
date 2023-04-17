import React from "react";
import "./index.scss";

const Bulb = ({ isActive }) => {
    return <div className={`bulb ${isActive ? "active" : ""}`}></div>;
  };
  
const Bulbs = ({ pattern }) => {
  const bulbs = pattern.map((isActive, index) => 
  <Bulb key={index} isActive={isActive} />)

  return <div className="bulbs-container">{bulbs}</div>;
};

export default Bulbs;