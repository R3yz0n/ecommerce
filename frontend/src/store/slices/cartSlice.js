import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return Math.round(num * 100) / 100;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const findItem = action.payload;
      const exitItem = state.cartItems.find((item) => item._id === findItem._id);
      if (exitItem) {
        state.cartItems = state.cartItems.map((item) =>
          item._id === exitItem._id ? findItem : item
        );
      } else {
        state.cartItems = [...state.cartItems, findItem];
      }
      state.cartItemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      state.shippingPrice = addDecimals(state.cartItemsPrice > 100 ? 0 : 100);

      state.taxPrice = addDecimals(Number((0.15 * state.cartItemsPrice).toFixed(2)));

      state.totalPrice = addDecimals(
        Number(state.cartItemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
