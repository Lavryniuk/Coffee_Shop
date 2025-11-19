import React from "react";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import Footer from "../../components/footer/Footer";
import Divider from "../../components/divider/Divider";
import "./homePage.scss";
import coffee1 from "../../assets/img/mainPage/item1.png";
import coffee2 from "../../assets/img/mainPage/item2.png";
import coffee3 from "../../assets/img/mainPage/item3.png";

function HomePage() {
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
          <div className="home_best_card">
            <img src={coffee1} alt="Coffee 1" />
            <h3 className="home_best_card_name">Solimo Coffee Beans 2 kg</h3>
            <p className="home_best_card_price">$10.73</p>
          </div>

          <div className="home_best_card">
            <img src={coffee2} alt="Coffee 2" />
            <h3 className="home_best_card_name">Presto Coffee Beans 1 kg</h3>
            <p className="home_best_card_price">$15.99</p>
          </div>

          <div className="home_best_card">
            <img src={coffee3} alt="Coffee 3" />
            <h3 className="home_best_card_name">AROMISTICO Coffee 1 kg</h3>
            <p className="home_best_card_price">$6.99</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
