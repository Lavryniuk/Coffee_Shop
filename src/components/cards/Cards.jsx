import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Card from "../card/Card";

import "./cards.scss";

const Cards = ({ cardsToRender }) => {
  const { data, loading, error } = useFetch(
    "https://coffee-mock-2.onrender.com/cards"
  );

  const cardsToShow = cardsToRender || data || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!cardsToShow.length) return <p>No cards to display</p>;

  return (
    <div className="cards">
      {cardsToShow.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          cardPhoto={card.img}
          name={card.title}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default Cards;
