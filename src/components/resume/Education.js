import React from "react";

const Education = (props) => {
  return (
    <div className="container-fluid p-2">
      <div className="row">
        <div className="col-6">
          {props.dev}
          <p>{props.name}</p>
        </div>
        <div className="col-6">
          {props.year}
          <p>{props.place}</p>
        </div>
      </div>
    </div>
  );
};
export default Education;
