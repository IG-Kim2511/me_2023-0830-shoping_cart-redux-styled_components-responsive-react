// Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/reducers/cartReducer';

const Cart = () => {
  // 👉redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Clear the entire localStorage
  const handleResetCart = () => {
    // Remove all items from the Redux store
    cartItems.forEach((item) => dispatch(removeFromCart(item)));    
    localStorage.clear();
  };

  return (
    <div className="cart">
      <h2>Cart Page</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} :  ${item.price.toFixed(2)}
            <div>
              <button className="myButton" onClick={() => dispatch(decreaseQuantity(item))}>-</button>
              {item.quantity}
              <button className="myButton" onClick={() => dispatch(increaseQuantity(item))}>+</button>
              <button className="myButton" onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="myButton" onClick={handleResetCart}>Reset Cart</button>

    </div>
  );
};

export default Cart;
