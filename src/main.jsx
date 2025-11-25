import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import App from "./App";

import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { CartProvider } from "./context/cartProvider/CartProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
