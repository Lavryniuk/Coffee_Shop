import React from "react";
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
import Footer from "../../components/footer/Footer";
import bgImage from "../../assets/img/coffeePage/coffeePageBG.jpg";
import mainPhoto from "../../assets/img/coffeeItemPhoto.jpg";

const CoffeeItemPage = () => {
  const paragraph = `Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
  return (
    <div>
      <Header title={"Our Coffee"} bgImage={bgImage} />
      <Section
        img={{ src: mainPhoto, size: "wide" }}
        info={{
          title: "About it",
          paragraph: paragraph,
          country: "Brazil",
          price: "16.99",
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
