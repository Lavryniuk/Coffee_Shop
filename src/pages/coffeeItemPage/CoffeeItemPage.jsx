import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
import Footer from "../../components/footer/Footer";
import bgImage from "../../assets/img/coffeePage/coffeePageBG.jpg";

const CoffeeItemPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch("/db.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const item = data.cards.find((card) => card.id === id);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <Header title={"Our Coffee"} bgImage={bgImage} />
      <Section
        img={{ src: item.img, size: "wide" }}
        info={{
          title: item.title,
          paragraph: item.paragraph || "No description yet",
          country: item.country || "Unknown",
          price: item.price,
        }}
        options={{
          showCountryAndPrice: true,
          layout: "wide",
          showDivider: false,
        }}
      />
      <Footer />
    </div>
  );
};

export default CoffeeItemPage;
