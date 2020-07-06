import React from "react";
import ava from "../img/ava.jpg";

const Info = (props) => {
  return (
    <div className="container-fluid p-2">
      <div className="row">
        <div
          className="col-12"
          style={{
            maxWidth: "-webkit-fill-available",
            margin: "auto",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={ava}
            alt="pic"
            style={{ width: "220px", height: "220px", borderRadius: "50%" }}
          />
          <h2 style={{ paddingTop: ".5rem" }}>Manvel Darbinyan</h2>
          <hr
            style={{
              borderTop: "3px solid rgb(63, 81, 181)",
              width: "80%",
              borderRadius: "5px",
            }}
          />
          <h2>WEB</h2>
          <a
            href="https://github.com/ManvelDarbinyan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h5>GitHub</h5>
          </a>
          <a
            href="https://my-little-phone-store.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h5>Phone Store</h5>
          </a>
          <a
            href="https://my-weather-react.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h5> Weather</h5>
          </a>
          <a
            href="https://beach-resort-roomss.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h5>Beach Resort Rooms</h5>
          </a>
          <a
            href="https://searchimg.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h5>Search Images</h5>
          </a>
          <hr
            style={{
              borderTop: "3px solid rgb(63, 81, 181)",
              width: "80%",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Info;
