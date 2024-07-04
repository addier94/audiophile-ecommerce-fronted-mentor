import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../typescript/product";
import jsonData from "../assets/data.json";

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: jsonData,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
