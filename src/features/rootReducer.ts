import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  categories: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
