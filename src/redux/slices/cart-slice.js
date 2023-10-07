import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    init: (state, action) => {
      const decodedData = atob(action.payload);
      const cart = JSON.parse(decodedData);
      state.items = cart.items;
      state.totalQuantity = cart.totalQuantity;
      state.totalAmount = cart.totalAmount;
    },
    addToCart: (state, action) => {
      const { _id, price, src1, brand, title } = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);
      state.totalQuantity++;
      state.totalAmount += price;
      if (!existingItem) {
        state.items.push({
          _id: _id,
          price: price,
          quantity: 1,
          totalPrice: price,
          image: src1,
          brand: brand,
          title: title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += price;
      }
      const encodedData = btoa(JSON.stringify(state));
      localStorage.setItem("koovsData", encodedData);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item._id === id);
      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== id);
      } else {
        existingItem.quantity--;
      }
      const encodedData = btoa(JSON.stringify(state));
      localStorage.setItem("koovsData", encodedData);
    },
    emptyCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, init, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
