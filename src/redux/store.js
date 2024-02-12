import { configureStore } from "@reduxjs/toolkit";
import {
  productReducer,
  cartReducer,
  orderReducer,
  singleProductReducer,
} from "./reducers/userReducer.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    singleProduct:singleProductReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});

export default store;

export const server = "'https://fake-ecommerce-app-api.onrender.com";
