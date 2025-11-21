import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ cardPhoto, name, price, isBG = false, id }) => {
  return (
    <Link
      to={`/coffeeItem/${id}`}
      className="card"
      style={{ backgroundColor: isBG ? `rgba(255, 255, 255, 0.65)` : "" }}
    >
      <div className="card_img">
        <img src={cardPhoto} alt="cardPhoto" />
      </div>
      <div className="card_info">
        <h3 className="card_name">{name}</h3>
        <p className="card_price">${price}</p>
      </div>
    </Link>
  );
};

export default Card;
