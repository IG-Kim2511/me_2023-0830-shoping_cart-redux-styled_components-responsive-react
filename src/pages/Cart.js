
// Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/reducers/cartReducer';

import "./cart.css"
import styled from '@emotion/styled';


const Mainst = styled.div`


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;


const Cart = () => {
  // Redux setup
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total price, tax, and subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Assume a 10% tax rate, you can adjust this as needed
  const taxRate = 0.10;
  const tax = subtotal * taxRate;

  const total = subtotal + tax;

  // Function to clear the entire localStorage and Redux store
  const handleResetCart = () => {
    // Remove all items from the Redux store
    cartItems.forEach((item) => dispatch(removeFromCart(item)));

    // Clear localStorage
    localStorage.clear();
  };

  return (
    <div className="cart">
      <h2>Cart Page</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className='item-container'>
            <Mainst className='img-container'>
              <div>
                <img className="cart-img" src={item.image}  alt={item.title}/>
                <h4 className='title'>{item.title}</h4>
              </div>
              <div className='price-container'>
                <h4>Price  : ${item.price.toFixed(2)}</h4>
                <h4>QTY : {item.quantity}</h4>
              </div>
            </Mainst>
            <div>
              <button className="myButton" onClick={() => dispatch(decreaseQuantity(item))}>-</button>
              <button className="myButton" onClick={() => dispatch(increaseQuantity(item))}>+</button>
              <button className="myButton" onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
        <h4>Tax (10%): ${tax.toFixed(2)}</h4>
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>
      <button className="myButton" onClick={handleResetCart}>Reset Cart</button>
      <button className="myButton" >Order</button>
    </div>
  );
};

export default Cart;
