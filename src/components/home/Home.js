import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="home">
          <div className="col-12 p-5">
            <img
              src="https://static.secure.website/wscfus/4693051/uploads/mascot_3_.png"
              alt="avatar"
            />
            <h2>Front-End Web Developer</h2>
            <p>HTML5 | CSS3 | Bootstrap | JavaScript | React | Redux</p>
            <a
              href="https://github.com/ManvelDarbinyan"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052944341057"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/manveldarbinyan"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-telegram" aria-hidden="true"></i>
            </a>
            <a href="skype:Մանվել-Դարբինյան?call">
              <i className="fa fa-skype" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
