import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 col-lg-9 col-sm-6">
            <Link to="/">Home</Link>
          </div>
          <div className="col-3 col-lg-1 col-sm-2">
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="col-3 col-lg-1 col-sm-2">
            <Link to="/resume">Resume</Link>
          </div>
          <div className="col-3 col-lg-1 col-sm-2">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
