import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  /* transform: translateX(-100%); */

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    /* display: flex; */

    height: 100vh;
    width: 20vw;
    padding-top: 3.5rem;
    
    position: fixed;
    top: 0;
    left: 0;

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    background-color: lightgrey;
    flex-flow: column nowrap;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const IconBtn = styled.button`

  /* 모든 버튼 width 똑같은 크기로 설정 */
  /* width: 9rem; */
	padding: 0.5rem;
  margin: 0.5rem;

	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color:#f9f9f9;
	border-radius: 50%;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	/* font-size:15px; */
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;

  text-align: center; 

/* hover-focus-active순서로 하면 에러 안남 */
&:hover {
	background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
}
&:active {
	position:relative;
	top:1px;
}
`;

const BurgerNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
      
          <Link to="/" >
            <IconBtn>
            <HomeIcon/>
            </IconBtn>
          </Link>
      </li>
      <li>
          <Link to="/products" >
            <IconBtn>
              <ShoppingCartIcon/>
              </IconBtn>
          </Link>
      </li>
      <li>
          <Link to="/cart" >
            <IconBtn>
              <LocalMallIcon/>
              </IconBtn>
          </Link>
      </li>
    </Ul>
  )
}

export default BurgerNav