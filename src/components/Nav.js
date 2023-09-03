
// Nav.js
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const Nav = () => {
    // 👉redux
   // Use useSelector to get cartItems and calculate cart item count
   const cartItems = useSelector((state) => state.cart.cartItems);
   const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);


  return (

    <div>
        <nav className='nav'>
            <ul>
            <li>
                <Link to="/" className='myButton'>Home</Link>
            </li>
            <li>
                <Link to="/products"  className='myButton'>products</Link>
            </li>
            <li>
                <Link to="/cart" className='myButton'>cart({cartItemCount})</Link>
            </li>
            
            </ul>
        </nav>  

    </div>
  )
}

export default Nav