import React from "react";
import { useFetch } from "../../hooks/useFetch";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Footer from "../../components/footer/Footer";
import Divider from "../../components/divider/Divider";
import Card from "../../components/card/Card";
import "./homePage.scss";

function HomePage() {
  const { data, loading, error } = useFetch("/db.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <HomeHeader />
      <div className="home_about">
        <h2 className="home_about_title">About Us</h2>

        <Divider color={"#000"} invertIcon={true} />

        <div className="home_about_text">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face. <br />
          <br /> Now residence dashwoods she excellent you. Shade being under
          his bed her, Much read on as draw. Blessing for ignorant exercise any
          yourself unpacked. Pleasant horrible but confined day end marriage.
          Eagerness furniture set preserved far recommend. Did even but nor are
          most gave hope. Secure active living depend son repair day ladies now.
        </div>
      </div>

      <div className="home_best">
        <h2 className="home_best_title">Our best</h2>
        <div className="home_best_cards">
          {data.cards.map((card, i) => (
            <div className="home_best_card" key={card.id}>
              <Card
                id={card.id}
                cardPhoto={card.img}
                name={card.title}
                price={card.price}
                isBG={true}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
