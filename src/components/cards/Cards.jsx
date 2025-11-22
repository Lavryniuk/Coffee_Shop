import React from "react";
import Card from "../card/Card";

import "./cards.scss";

const Cards = ({ cardsToRender }) => {
  if (!cardsToRender.length)
    return <p className="noCards">No cards to display</p>;

  return (
    <div className="cards">
      {cardsToRender.map((card) => (
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
