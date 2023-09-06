import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './BurgerNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;

  /* 👉0419 responsive */
  display: none;

  /* 🍀0419 responsive */
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;

    /* 👉js0413 */
    background-color: ${({ open }) => open ? 'grey' : 'black'};
    border-radius: 10px;
    
    transform-origin: 1px;

    /* 🍀transition */
    transition: all 0.3s linear;


    /* 🍀js0413 transform */
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  // 🍀js0413 props, transform
  const [open, setOpen] = useState(false)
  
  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
     
      <RightNav/>
      {
        open
        ?<RightNav open={open}/>
        :null
      }       

    </div>
  )
}

export default Burger