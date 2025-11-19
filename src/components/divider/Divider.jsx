import React from "react";
import "./divider.scss";
import icon from "../../assets/icons/coffee-beans.svg";

const Divider = ({ color = "#fff", invertIcon = false }) => {
  return (
    <div className="divider" style={{ "--divider-color": color }}>
      <span></span>
      <img
        src={icon}
        alt="beans"
        className="divider_icon"
        style={{ filter: invertIcon ? "invert(1)" : "none" }}
      />
      <span></span>
    </div>
  );
};

export default Divider;
