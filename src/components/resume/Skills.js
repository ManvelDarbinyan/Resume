import React from "react";

const Skills = (props) => {
  return (
    <div className="container-fluid p-2">
      <div className="row">
        <div className="col-3">{props.skill}</div>
        <div className="col-9" style={{ margin: "auto" }}>
          <div
            className="progress"
            style={{ height: "0.6rem", fontSize: ".6rem" }}
          >
            <div
              className="progress-bar"
              style={{ width: `${props.progress}` }}
            >
              {props.progress}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
