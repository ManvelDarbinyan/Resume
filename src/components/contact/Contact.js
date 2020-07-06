import React from "react";
import dev from "../img/dev.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container p-5">
      <div className="row p-4">
        <div
          className="col-12 col-md-6 p-3"
          style={{ backgroundColor: "#c0c0c0a6" }}
        >
          <h2>Manvel Darbinyan</h2>
          <hr
            style={{
              borderTop: "2px solid #007bff",
              width: "85%",
              borderRadius: "50%",
            }}
          />
          <div className="p-5 text-center overflow-auto ">
            <img src={dev} alt="pic" style={{ width: "350px" }} />
          </div>
        </div>
        <div
          className="col-12 col-md-6 p-3"
          style={{ backgroundColor: "#c0c0c0a6" }}
        >
          <h2 style={{ padding: "0 20px" }}>Contact ME</h2>
          <hr
            style={{
              borderTop: "2px solid #007bff",
              width: "85%",
              borderRadius: "50%",
            }}
          />
          <div className="contact">
            <i className="fa fa-phone-square" aria-hidden="true" />
            <a href="tel:+37496351303">My Phone</a>
          </div>
          <div className="contact">
            <i className="fa fa-envelope" aria-hidden="true" />
            <a href="mailto:manveldarbinyan@gmail.com">My E-mail</a>
          </div>
          <div className="contact">
            <i className="fa fa-skype" aria-hidden="true"></i>
            <a href="skype:Մանվել-Դարբինյան?call">My Skype</a>
          </div>
          <div className="contact">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
            <a href="whatsapp://send?phone=+37496351303">My WhatsApp</a>
          </div>
          <div className="contact">
            <i className="fa fa-telegram" aria-hidden="true"></i>
            <a title="Telegram" href="tg://resolve?domain=manveldarbinyan">
              My Telegram
            </a>
          </div>
          <div className="contact">
            <i className="fa fa-facebook-square" aria-hidden="true" />
            <a
              href="https://www.facebook.com/profile.php?id=100052944341057"
              rel="noopener noreferrer"
              target="_blank"
            >
              My Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
