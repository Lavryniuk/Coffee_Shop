import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import { useFetch } from "../../hooks/useFetch";
import bgImage from "../../assets/img/goodsPage/goodsBG.jpg";
import mainPhoto from "../../assets/img/goodsPage/goodsMainPhoto.jpg";
import "./goodsPage.scss";

const CoffeePage = () => {
  const { data, loading, error } = useFetch(
    "https://coffee-mock-2.onrender.com/cards"
  );

  const [randomSix, setRandomSix] = React.useState([]);

  useEffect(() => {
    if (data) {
      const result = [...data].sort(() => Math.random() - 0.5).slice(0, 6);
      setRandomSix(result);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const paragraph = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

  Afraid at highly months do things on at. Situation recommend objection do intention
  so questions. 
  As greatly removed calling pleased improve an. Last ask him cold feel
  met spot shy want. Children me laughing we prospect answered followed. At it went
  is song that held help face.`;

  return (
    <div className="coffee_page">
      <Header title={"For your pleasure"} bgImage={bgImage} />

      <Section
        img={{ src: mainPhoto }}
        info={{
          title: "About our goods",
          paragraph: paragraph,
        }}
        options={{
          showCountryAndPrice: false,
          showDivider: true,
        }}
      />

      <Cards cardsToRender={randomSix} />

      <Footer />
    </div>
  );
};

export default CoffeePage;
