
// Nav.js
import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


// 🦄 styled, responsive
const NavSt = styled.div`
  /* Media query for screens with a max-width of 750px */
  /* @media screen and (max-width: 750px) {
        .count{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
  } */

  @media (max-width: 750px) {
    
      .count{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
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
            {window.innerWidth > 750 ? (
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
            ) : (
                <ul>
                <li>
                    <Link to="/" className="myButton2">
                      <HomeIcon /> {/* Use the Home icon */}
                    </Link>
                </li>
                <li>
                    <Link to="/products" className="myButton2">
                     <LocalMallIcon /> {/* Use the Shopping Cart icon */}
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="myButton2 count">
                      <ShoppingCartIcon /> 
                      ({cartItemCount})
                    </Link>
                </li>
                </ul>
            )}
        </NavSt>

    </div>
  )
}

export default Nav