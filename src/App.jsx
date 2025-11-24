import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import GoodsPage from "./pages/goodsPage/GoodsPage";
import CoffeePage from "./pages/coffeePage/CoffeePage";
import CoffeeItemPage from "./pages/coffeeItemPage/CoffeeItemPage";
import CartPage from "./pages/cartPage/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/goods" element={<GoodsPage />} />
      <Route path="/coffee" element={<CoffeePage />} />
      <Route path="/coffeeItem/:id" element={<CoffeeItemPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
