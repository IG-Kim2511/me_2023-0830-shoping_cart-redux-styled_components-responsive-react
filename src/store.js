// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add more reducers if needed
  },
});

export default store;
