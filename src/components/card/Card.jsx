import React from "react";
import { useCart } from "../../context/cartProvider/CartProvider";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ cardPhoto, name, price, isBG = false, id }) => {
  const { addToCart } = useCart();
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
        <button
          className="card_btn"
          onClick={(e) => {
            e.preventDefault();
            addToCart({ id, name, price, img: cardPhoto });
          }}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default Card;
