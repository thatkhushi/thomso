import React from "react";
import "./Footer.css";
import left from "../../images/left.png";
import fb from "../../images/fb.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__text">
          <h3>Download the app now.</h3>
          <h1>
            Available on your favorite store. Start your premium experience now
          </h1>
        </div>
        <div className="home__buttons1">
          <button className="buttons__play">Play Store</button>
          <button className="buttons__app">App Store</button>
        </div>
      </div>
      <div className="bottom__footer">
        <img src={left}  className="ic"/>
        <div className="footer__icons">
          <img src={twitter} />
          <img src={fb} />
          <img src={instagram} />
        </div>
        <p>Copywright 2020 Bella Onojie.com</p>
      </div>
    </div>
  );
};

export default Footer;
