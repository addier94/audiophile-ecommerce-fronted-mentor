import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TCartItem {
  id: string | number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  items: TCartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const getStoredCartItems = (): TCartItem[] => {
  const storedItems = localStorage.getItem("cartItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

const calculateTotals = (items: TCartItem[]) => {
  return items.reduce(
    (totals, item) => {
      totals.totalAmount += item.quantity * item.price;
      totals.totalQuantity += item.quantity;
      return totals;
    },
    { totalQuantity: 0, totalAmount: 0 }
  );
};

const initialItems = getStoredCartItems();
const initialState: CartState = {
  items: initialItems,
  ...calculateTotals(initialItems),
};

const updateLocalStorage = (items: TCartItem[]) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const updateItemQuantity = (
  items: TCartItem[],
  id: string | number,
  delta: number
) => {
  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex >= 0) {
    const item = items[itemIndex];
    const newQuantity = item.quantity + delta;

    if (newQuantity >= 1 && newQuantity <= 99) {
      items[itemIndex] = {
        ...item,
        quantity: newQuantity,
        totalPrice: newQuantity * item.price,
      };
    }
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<TCartItem>) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex >= 0) {
        updateItemQuantity(state.items, newItem.id, newItem.quantity);
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.quantity * newItem.price,
        });
      }

      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;

      updateLocalStorage(state.items);
    },

    incrementProductQty(state, action: PayloadAction<{ id: string | number }>) {
      updateItemQuantity(state.items, action.payload.id, 1);
      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;

      updateLocalStorage(state.items);
    },

    decrementProductQty(state, action: PayloadAction<{ id: string | number }>) {
      updateItemQuantity(state.items, action.payload.id, -1);
      const totals = calculateTotals(state.items);
      state.totalAmount = totals.totalAmount;
      state.totalQuantity = totals.totalQuantity;

      updateLocalStorage(state.items);
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  addItemToCart,
  clearCart,
  incrementProductQty,
  decrementProductQty,
} = cartSlice.actions;
export default cartSlice.reducer;
