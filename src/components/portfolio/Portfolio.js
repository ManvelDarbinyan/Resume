import React from "react";
import room from "../img/room.jpg";
import tel from "../img/pho.jpg";
import lon from "../img/lon.jpg";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-4 p-4">
          <div className="portfolio">
            <img
              src={room}
              alt="pic"
              style={{ maxWidth: "-webkit-fill-available" }}
            />
            <h5>Beach Rooms</h5>
            <h6>
              <a
                href="https://github.com/ManvelDarbinyan/BeachResort"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://beach-resort-roomss.netlify.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </h6>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4 p-4">
          <div className="portfolio">
            <img
              src={tel}
              alt="pic"
              style={{ maxWidth: "-webkit-fill-available" }}
            />
            <h5>Phone Store</h5>
            <h6>
              <a
                href="https://github.com/ManvelDarbinyan/phone-store"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://my-little-phone-store.netlify.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </h6>
          </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4 p-4">
          <div className="portfolio">
            <img
              src={lon}
              alt="pic"
              style={{ maxWidth: "-webkit-fill-available" }}
            />
            <h5>Search Images</h5>
            <h6>
              <a
                href="https://github.com/ManvelDarbinyan/searchimages"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://searchimg.netlify.app"
                rel="noopener noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
