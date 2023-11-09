import React, { useState } from "react";
import "../Checkout/Checkout.scss";
import { cartStore } from "../../store/Cart";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "../../lib/Schema";

const Checkout = () => {
  const [section, setSection] = useState("info");

  const { cart, totalPrice } = cartStore((state) => state);
  let totalPriceApp = totalPrice.toFixed(2);
  let shipping = totalPriceApp / 3;
  let shippingFee = shipping.toFixed(2);
  let totalFee = parseFloat(totalPriceApp) + parseFloat(shippingFee);

  return (
    <div className="checkout">
      <div className="wrapper">
        <div className="head">Checkout</div>

        <div className="container">
          <div className="delivery-details">
            <div className="title">Delivery Options</div>

            <div className="delivery-cont">
              <DeliveryDetails section={section} setSection={setSection} />
            </div>

            <hr />
          </div>

          <div className="cart-contents">
            <div className="title">In your cart</div>

            <div className="contents">
              <div className="price-list">
                <div className="sub">
                  <p>Subtotal</p> <h3>${totalPriceApp}</h3>
                </div>

                <div className="shipping">
                  <p>Shipping</p> <h3>${shippingFee}</h3>
                </div>

                <div className="total">
                  <p>Total</p> <h3>${totalFee}</h3>
                </div>
              </div>

              <div className="delivery-period">
                <p>Arrives Mon, Dec 21 - Friday, Dec24</p>
              </div>

              <div className="item-list">
                {cart &&
                  cart.map((product, id) => (
                    <div className="box" key={id}>
                      <div className="img">
                        <img src={product.image} alt="" />
                      </div>

                      <div className="list">
                        <div className="name">
                          Item name: {product.foodName}
                        </div>
                        <div className="quantity">
                          Item quantity: {product.quantity}
                        </div>
                        <div className="price">
                          Item price: ${product.price}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeliveryDetails = ({ section, setSection }) => {
  if (section === "info") {
    const schema = checkoutSchema;
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
      console.log(data);
      setSection("validated");
    };

    return (
      <div className="info-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Full name"
              {...register("name")}
              id="name"
            />
            {errors.name && (
              <div className="warning">{errors.name?.message}</div>
            )}
          </div>

          <div className="address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="No 1, john doe street"
              {...register("address")}
              id="address"
            />

            {errors.address && (
              <div className="warning">{errors.address?.message}</div>
            )}
          </div>

          <div className="landmark">
            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              placeholder="Landmark"
              {...register("landmark")}
              id="landmark"
            />

            {errors.landmark && (
              <div className="warning">{errors.landmark?.message}</div>
            )}
          </div>

          <div className="city">
            <label htmlFor="name">City</label>
            <input
              type="text"
              placeholder="City"
              {...register("city")}
              id="city"
            />
            {errors.city && (
              <div className="warning">{errors.city?.message}</div>
            )}
          </div>

          <div className="contact">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                id="email"
              />

              {errors.email && (
                <div className="warning">{errors.email?.message}</div>
              )}
            </div>

            <div className="mobile">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                placeholder="0000000 000"
                {...register("mobile")}
                id="mobile"
              />

              {errors.mobile && (
                <div className="warning">{errors.mobile?.message}</div>
              )}
            </div>
          </div>

          <button type="submit">Save & continue</button>
        </form>
      </div>
    );
  }
};

export default Checkout;
