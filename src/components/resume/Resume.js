import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Info from "./Info";

const Resume = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div
          className="col-12 col-lg-4 p-4"
          style={{
            backgroundColor: "#c0c0c0a6",
            border: "5px solid white",
          }}
        >
          <Info />
        </div>
        <div
          className="col-12 col-lg-4 p-4"
          style={{ backgroundColor: "#c0c0c0a6", border: "5px solid white" }}
        >
          <h3> Education</h3>
          <Education
            dev="Front-End Developer"
            name="Basic IT center"
            year="2019 November - 2020 May"
            place="18 Isahakyan St, Yerevan 0025"
          />
          <Education
            dev="Front-End Developer"
            name="ToolBox Software"
            year="2019 July - 2019 November"
            place="22a, Nairi Zaryan St, Yerevan 0051"
          />
          <Education
            dev="Radio technologies and communication systems"
            name="National Polytechnic University of Armenia"
            year="2003 September - 2007 July"
            place="105 Teryan St, Yerevan, Armenia"
          />
          <hr
            style={{
              borderTop: "3px solid rgb(63, 81, 181)",
              width: "80%",
              borderRadius: "5px",
            }}
          />
          <h3>Personal Skills</h3>
          <p>
            Positive attitude, Goal-oriented, Creative thinking, Logical
            thinking, Teamwork, Fast orientation, Self-motivation, Proactive,
            Strong memory, Fast Learning.
          </p>
        </div>
        <div
          className="col-12 col-lg-4 p-4"
          style={{ backgroundColor: "#c0c0c0a6", border: "5px solid white" }}
        >
          <h3>Skills</h3>
          <Skills skill="HTML" progress="70%" />
          <Skills skill="CSS" progress="63%" />
          <Skills skill="Bootstrap" progress="63%" />
          <Skills skill="JavaScript" progress="83%" />
          <Skills skill="React" progress="53%" />
          <Skills skill="Redux" progress="33%" />
          <hr
            style={{
              borderTop: "3px solid rgb(63, 81, 181)",
              width: "80%",
              borderRadius: "5px",
            }}
          />
          <h3>Languages</h3>
          <Skills skill="Armenian" progress="83%" />
          <Skills skill="Russian" progress="73%" />
          <Skills skill="English" progress="40%" />
        </div>
      </div>
    </div>
  );
};
export default Resume;
