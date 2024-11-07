import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "@/types/cartTypes";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  //   the following are actions that can be executed to change the state of the cart: add to cart, remove from cart,increment cart items, decrement cart item, clear cart.
  reducers: {
    ADD_TO_CART: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === item.productId
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    REMOVE_FROM_CART: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    INCREMENT_CART_ITEM: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const item = state.items.find((item) => item.productId === productId);

      if (item) {
        item.quantity += 1;
      }

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    DECREMENT_CART_ITEM: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const item = state.items.find((item) => item.productId === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    CLEAR_CART: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
  CLEAR_CART,
} = cartSlice.actions;

export default cartSlice.reducer;
