import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import trashIcon from "../../assets/icons/trash.svg";

import "./cartPage.scss";

const CartPage = () => {
  const [counter, setCounter] = useState(1);
  const bgImage =
    "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg";

  const price = 9.99;

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const finalPrice = (price * counter).toFixed(2);

  const handleDelete = () => {
    setCounter(0);
  };

  return (
    <>
      <Header title={"Everything about coffee"} bgImage={bgImage} />
      <div className="cart_page">
        <div className="cart_page_container">
          {counter === 0 && (
            <div className="cart_page_top">
              <h2 className="cart_page_title">Your cart is empty</h2>
              <p className="cart_page_text">
                Add something to make us happy :)
              </p>
            </div>
          )}

          {counter > 0 && (
            <div className="cart_page_items">
              <div className="cart_page_item">
                <div className="cart_page_item_img">
                  <img
                    src="https://images.pexels.com/photos/9050512/pexels-photo-9050512.jpeg"
                    alt="1"
                  />

                  <h3 className="cart_page_item_name">
                    Presto Coffee Beans 1 kg
                  </h3>
                </div>
                <div className="cart_page_item_info">
                  <div className="cart_page_item_counter">
                    <button
                      className="cart_page_item_remove"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <span className="cart_page_item_quantity">{counter}</span>
                    <button className="cart_page_item_add" onClick={increment}>
                      +
                    </button>
                  </div>
                  <h2 className="cart_page_item_price">${finalPrice}</h2>
                  <button
                    className="cart_page_item_delete"
                    onClick={handleDelete}
                  >
                    <img src={trashIcon} alt="trashIcon" />
                  </button>
                </div>
              </div>

              <div className="cart_page_total">
                <span className="cart_page_total_divider"></span>
                <h2 className="cart_page_total_title">Total:</h2>
                <h2 className="cart_page_total_price">${finalPrice}</h2>
                <div className="cart_page_total_bottom">
                  <button className="cart_page_total_btn">Pay for cart</button>
                  <span className="cart_page_total_divider"></span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="cart_page_bottom">
          <Link to="/coffee" className="cart_page_btn">
            Back to shop
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
