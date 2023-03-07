import React from "react";
import "./Home.css";
import mobile from "../../images/mobile.png";
import rect1 from "../../images/Rectangle1.png";
import Rectanglesecond from "../../images/Rectanglesecond.png";
import Rectanglethird from "../../images/Rectanglethird.png";
import Card from "../Card/Card";
import Line from "../Line/Line";
import Footer from "../Footer/Footer";

const Home = () => {
  const data = [
    {
      id: 1,
      p1: "Create an account",
      p2: "Create/login to an existing account to get started",
      p3: "An account is created with your email and a desired password",
      direction: "row",
      img: rect1,
    },
    {
      id: 2,
      p1: "Explore varieties",
      p2: "Shop for your favorites meal as e dey hot.",
      p3: "Shop for your favorite meals or drinks and enjoy while doing it.",
      direction: "row-reverse",
      img: Rectanglesecond,
    },
    {
      id: 3,
      p1: "Checkout",
      p2: "When you done check out and get it delivered.",
      p3: "When you done check out and get it delivered with ease.",
      direction: "row",
      img: Rectanglethird,
    },
  ];

  return (
    <div className="home__container">
      <div className="home__content">
        <div className="home__text">
          <h3>Food app</h3>
          <h1>Why stay hungry when you can order form Bella Onojie</h1>
          <h2>Download the bella onoje's food app now on</h2>
        </div>
        <div className="home__buttons1">
          <button className="buttons__play">Play Store</button>
          <button className="buttons__app">App Store</button>
        </div>
        <div className="mobile__image">
          <img src={mobile} />
          <h1>How the app works</h1>
        </div>
      </div>
      <div className="card__wrapper">
        <div className="card__container">
          {data.map((e) => {
            return <Card e={e} />;
          })}
        </div>
      </div>
      <div className="footer__wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
