import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import GoodsPage from "./pages/goodsPage/GoodsPage";
import CoffeePage from "./pages/coffeePage/CoffeePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/goods" element={<GoodsPage />} />
      <Route path="/coffee" element={<CoffeePage />} />
    </Routes>
  );
}

export default App;
