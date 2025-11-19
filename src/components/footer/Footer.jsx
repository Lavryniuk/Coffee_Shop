import React from "react";
import Nav from "../nav/Nav";
import Divider from "../divider/Divider";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Nav color="#000" invertLogo={true} position="static" />
      <div className="footer_divider">
        <Divider color={"#000"} invertIcon={true} />
      </div>
    </footer>
  );
};

export default Footer;
