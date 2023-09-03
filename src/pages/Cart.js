// Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../reducers/cartReducer';


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => dispatch(removeFromCart(item))}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
