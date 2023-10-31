import React, { useState, useEffect, useRef } from "react";
import "../Cart/Cart.scss";
import { BsFillCartFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Modal } from "@mui/material";

const Cart = () => {
  const ref = useRef();

  const [isopen, setIsOpen] = useState(false);
  const [isempty, setIsEmpty] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  //adds and removes event listeners for the dropdown menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("resize", handleResize);
    };
  });
  

  return (
    <div className="cart">
      <BsFillCartFill className="icon" onClick={() => setIsOpen(true)} />
      <div className="cart-count">3</div>
      {!isMobile ? (
        isopen ? (
          <div className="cart-bucket-desktop" ref={ref}>
            {isempty ? (
              <div className="isempty">
                <div className="head">Your order</div>

                <div className="content">
                  <BsFillCartFill className="icon" />
                  <p>
                    Your cart is empty. Let's discover our collections of
                    popular dishes.
                  </p>
                </div>
              </div>
            ) : (
              <div className="notempty">
                <div className="head">
                  <div className="left">
                    <h4>Your order</h4>
                    <p>McDonald's, Senayan Trade Center</p>
                  </div>

                  <div
                    className="add-more-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaPlus className="icon" />
                    Add more
                  </div>
                </div>

                <div className="content">
                  <div className="item">
                    <div className="title">Mayonaise deez nuts</div>

                    <div className="amount">
                      <div className="sum">+</div>
                      <div className="value">2</div>
                      <div className="sum">-</div>
                    </div>

                    <div className="price">$10</div>
                  </div>
                </div>

                <div className="check-out">
                  <div className="tot-price">
                    <p>Total price</p>

                    <div className="tot-sum">$123.08</div>
                  </div>

                  <div className="checkout">Checkout</div>
                </div>
              </div>
            )}
          </div>
        ) : null
      ) : isopen ? (
        <Modal
          open={isopen}
          onClose={() => setIsOpen(false)}
          sx={{ background: "rgba(85, 83, 83, 0.576)" }}
        >
          <div className="cart-bucket-mobile">
            {isempty ? (
              <div className="isempty-mobile">
                <div className="head">Your order</div>

                <div className="content">
                  <BsFillCartFill className="icon" />
                  <p>
                    Your cart is empty. Let's discover our collections of
                    popular dishes.
                  </p>
                </div>
              </div>
            ) : (
              <div className="notempty-mobile">
                <div className="head">
                  <div className="left">
                    <h4>Your order</h4>
                    <p>McDonald's, Senayan Trade Center</p>
                  </div>

                  <div
                    className="add-more-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaPlus className="icon" />
                    Add more
                  </div>
                </div>

                <div className="content">
                  <div className="item">
                    <div className="title">Mayonaise deez nuts</div>

                    <div className="amount">
                      <div className="sum">+</div>
                      <div className="value">2</div>
                      <div className="sum">-</div>
                    </div>

                    <div className="price">$10</div>
                  </div>
                </div>

                <div className="check-out">
                  <div className="tot-price">
                    <p>Total price</p>

                    <div className="tot-sum">$123.08</div>
                  </div>

                  <div className="checkout">Checkout</div>
                </div>
              </div>
            )}
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Cart;
