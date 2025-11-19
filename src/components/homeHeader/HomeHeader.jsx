import React from "react";
import "./homeHeader.scss";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import Divider from "../divider/Divider";

function HomeHeader() {
  return (
    <header className="home_header">
      <div className="home_header_nav">
        <Nav />
      </div>
      <div className="home_header_container">
        <h1 className="home_header_title">Everything You Love About Coffee</h1>
        <Divider />
        <h2 className="home_header_subtitle">
          We makes every day full of energy and taste
        </h2>
        <h2 className="home_header_subtitle">Want to try our beans?</h2>
      </div>
      <Link to="/coffee" className="home_header_btn">
        More
      </Link>
    </header>
  );
}

export default HomeHeader;
