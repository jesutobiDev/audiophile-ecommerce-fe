import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import checkoutReducer from "./slices/checkoutSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      checkoutForm: checkoutReducer,
    },
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
