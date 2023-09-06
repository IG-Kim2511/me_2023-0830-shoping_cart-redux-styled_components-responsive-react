// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

// 🦄new : configureStore (createStore 새로운 버전)
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add more reducers if needed
  },
});

export default store;
