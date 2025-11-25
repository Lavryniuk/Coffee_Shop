import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useCart } from "../../context/cartProvider/CartProvider";

import trashIcon from "../../assets/icons/trash.svg";

import "./cartPage.scss";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const bgImage =
    "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg";

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <Header title={"Everything about coffee"} bgImage={bgImage} />
      <div className="cart_page">
        <div className="cart_page_container">
          {cart.length === 0 && (
            <div className="cart_page_top">
              <h2 className="cart_page_title">Your cart is empty</h2>
              <p className="cart_page_text">
                Add something to make us happy :)
              </p>
            </div>
          )}

          {cart.length > 0 && (
            <div className="cart_page_items">
              {cart.map((item) => (
                <div key={item.id} className="cart_page_item">
                  <div className="cart_page_item_img">
                    <img src={item.img} alt={item.name} />
                    <h3 className="cart_page_item_name">{item.name}</h3>
                  </div>

                  <div className="cart_page_item_info">
                    <div className="cart_page_item_counter">
                      <button
                        className="cart_page_item_remove"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>

                      <span className="cart_page_item_quantity">
                        {item.quantity}
                      </span>

                      <button
                        className="cart_page_item_add"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <h2 className="cart_page_item_price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </h2>

                    <button
                      className="cart_page_item_delete"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <img src={trashIcon} alt="trashIcon" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart_page_total">
                <span className="cart_page_total_divider"></span>
                <h2 className="cart_page_total_title">Total:</h2>
                <h2 className="cart_page_total_price">${totalPrice}</h2>
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
