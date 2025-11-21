import React from "react";
import Nav from "../../components/nav/Nav";
import "./header.scss";

const Header = ({ title, bgImage }) => {
  const style = {
    backgroundImage: bgImage ? `url(${bgImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="header" style={style}>
      <div className="header_nav">
        <Nav />
      </div>
      <h1 className="header_title">{title}</h1>
    </div>
  );
};

export default Header;
