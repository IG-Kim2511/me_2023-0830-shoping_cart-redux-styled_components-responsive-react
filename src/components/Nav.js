
// Nav.js
import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Burger from './Burger';


// 🦄 styled, responsive
const NavSt = styled.div`   

/*   
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20; */

  /* 👉0419 responsive */
  /* display: none; */

  /* 🍀0419 responsive */
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = () => {

    // 👉redux
   // Use useSelector to get cartItems and calculate cart item count
   const cartItems = useSelector((state) => state.cart.cartItems);
   const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);


  return (
    <div>
        <NavSt>
            <ul>
                <li>
                    <Link to="/" className="myButton">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/products" className="myButton">
                    Products
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="myButton">
                    Cart ({cartItemCount})
                    </Link>
                </li>
            </ul>
        </NavSt>
        <Burger/>

    </div>
  )
}

export default Nav