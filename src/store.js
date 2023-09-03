// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add more reducers if needed
  },
});

export default store;
