import React from "react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Header from "../../components/header/Header";
import bgImage from "../../assets/img/coffeePage/coffeePageBG.jpg";
import mainPhoto from "../../assets/img/coffeePage/coffeeMainPhoto.jpg";
import Section from "../../components/section/Section";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import "./coffeePage.scss";

const CoffeePage = () => {
  const [filteredCards, setFilteredCards] = useState([]);

  const { data, loading, error } = useFetch("/db.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const cards = data.cards;

  const filterCards = (value) => {
    const filtered = cards.filter((card) => card.country === value);
    setFilteredCards(filtered);
  };

  const title = "Our Coffee";

  const paragraph = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
  
  Afraid at highly months do things on at. Situation recommend objection do intention
  so questions.
  As greatly removed calling pleased improve an. Last ask him cold feel
  met spot shy want. Children me laughing we prospect answered followed. At it went
  is song that held help face.`;

  return (
    <div className="coffee_page">
      <Header title={"Our Coffee"} bgImage={bgImage} />
      <Section
        img={{ src: mainPhoto }}
        info={{
          title: title,
          paragraph: paragraph,
        }}
        options={{
          showCountryAndPrice: false,
          showDivider: true,
        }}
      />

      <div className="coffee_page_filter">
        <div className="coffee_page_filter_left">
          <p className="coffee_page_filter_label">Looking for</p>
          <input
            className="coffee_page_filter_input"
            placeholder="start typing here..."
          ></input>
        </div>

        <div className="coffee_page_filter_right">
          <p className="coffee_page_filter_text">Or filter</p>
          <div className="coffee_page_filter_buttons">
            <button
              className="coffee_page_filter_btn"
              onClick={() => filterCards("Brazil")}
            >
              Brazil
            </button>
            <button
              className="coffee_page_filter_btn"
              onClick={() => filterCards("Kenya")}
            >
              Kenya
            </button>
            <button
              className="coffee_page_filter_btn"
              onClick={() => filterCards("Columbia")}
            >
              Columbia
            </button>
          </div>
        </div>
      </div>

      <Cards
        cardsToRender={filteredCards.length ? filteredCards : data.cards}
      />
      <Footer />
    </div>
  );
};

export default CoffeePage;
