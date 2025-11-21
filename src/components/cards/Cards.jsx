import React from "react";
import Card from "../card/Card";

import cardPhoto from "../../assets/img/mainPage/item3.png";
import "./cards.scss";

const Cards = () => {
  const name = "AROMISTICO Coffee 1 kg";
  const price = "6.99";
  return (
    <div className="cards">
      <Card cardPhoto={cardPhoto} name={name} price={price} />
      <Card cardPhoto={cardPhoto} name={name} price={price} />
      <Card cardPhoto={cardPhoto} name={name} price={price} />
      <Card cardPhoto={cardPhoto} name={name} price={price} />
      <Card cardPhoto={cardPhoto} name={name} price={price} />
      <Card cardPhoto={cardPhoto} name={name} price={price} />
    </div>
  );
};

export default Cards;
