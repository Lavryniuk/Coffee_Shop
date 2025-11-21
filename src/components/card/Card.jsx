import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ cardPhoto, name, price }) => {
  return (
    <Link to="/coffeeItem" className="card">
      <img src={cardPhoto} alt="cardPhoto" className="card_img" />
      <h3 className="card_name">{name}</h3>
      <p className="card_price">${price}</p>
    </Link>
  );
};

export default Card;
