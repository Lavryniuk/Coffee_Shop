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
  const [inputValue, setInputValue] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");

  const { data, loading, error } = useFetch(
    "https://coffee-mock-2.onrender.com/cards"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const cards = data;

  const getFilteredCards = () => {
    let filtered = [...cards];
    if (countryFilter !== "all") {
      filtered = filtered.filter((card) => card.country === countryFilter);
    }
    if (inputValue.trim() !== "") {
      filtered = filtered.filter((card) =>
        card.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    return filtered;
  };

  const filterByInput = (value) => {
    setInputValue(value);
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
            onChange={(e) => filterByInput(e.target.value)}
          ></input>
        </div>

        <div className="coffee_page_filter_right">
          <p className="coffee_page_filter_text">Or filter</p>
          <div className="coffee_page_filter_buttons">
            <button
              className="coffee_page_filter_btn"
              onClick={() => setCountryFilter("all")}
            >
              All
            </button>
            <button
              className="coffee_page_filter_btn"
              onClick={() => setCountryFilter("Brazil")}
            >
              Brazil
            </button>
            <button
              className="coffee_page_filter_btn"
              onClick={() => setCountryFilter("Kenya")}
            >
              Kenya
            </button>
            <button
              className="coffee_page_filter_btn"
              onClick={() => setCountryFilter("Columbia")}
            >
              Columbia
            </button>
          </div>
        </div>
      </div>

      <Cards cardsToRender={getFilteredCards()} />
      <Footer />
    </div>
  );
};

export default CoffeePage;
