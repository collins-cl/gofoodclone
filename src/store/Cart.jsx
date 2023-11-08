import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const cartStore = create(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        totalPrice: 0,
        totalItem: 0,

        addToCart: (product) => {
          const cart = get().cart;
          const totalprice = get().totalPrice;
          const totalitem = get().totalItem;

          const cartItem = cart.find((item) => item.id === product.id);

          if (cartItem) {
            const updatedCart = cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

            set(() => ({
              cart: updatedCart,
              totalPrice: totalprice + product.price,
              totalItem: totalitem + 1,
            }));
          } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            set((state) => ({
              cart: updatedCart,
              totalPrice: totalprice + product.price,
              totalItem: totalitem + 1,
            }));
          }
        },

        increaseProduct: (product) => {
          const cart = get().cart;
          const totalprice = get().totalPrice;
          const totalitem = get().totalItem;

          const cartItem = cart.find((item) => item.id === product.id);

          if (cartItem) {
            const updatedCart = cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

            set(() => ({
              cart: updatedCart,
              totalPrice: totalprice + product.price,
              totalItem: totalitem + 1,
            }));
          }
        },

        reduceProduct: (product) => {
          const cart = get().cart;
          const totalprice = get().totalPrice;
          const totalitem = get().totalItem;

          const cartItem = cart.find((item) => item.id === product.id);

          if (cartItem && cartItem.quantity > 1) {
            const updatedCart = cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );

            set(() => ({
              cart: updatedCart,
              totalPrice: totalprice - product.price,
              totalItem: totalitem - 1,
            }));
          } else if (cartItem && cartItem.quantity === 1) {
            const updatedCart = cart.filter((item) => item.id !== product.id);

            set(() => ({
              cart: updatedCart,
              totalPrice: totalprice - product.price,
              totalItem: totalitem - 1,
            }));
          }
        },
      }),
      { name: "cart" }
    )
  )
);
