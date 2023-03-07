import React from "react";
import "./Card.css";

const Card = ({e}) => {
  return (
    <div className="card__content" style={{flexDirection:`${e.direction}`}}>
      <img src={e.img} />
      <div className="card__text">
        <h3>{e.p1}</h3>
        <h1>{e.p2}</h1>
        <h2>{e.p3}</h2>
      </div>
    </div>
  );
};

export default Card;
