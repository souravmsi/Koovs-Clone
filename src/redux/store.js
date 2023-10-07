import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import cartReducer from './slices/cart-slice';

const store = configureStore({
    reducer:{authReducer, cartReducer}
})

export default store;