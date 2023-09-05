import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column; /* Display vertically */
  justify-content: flex-start; /* Align items to the top */
  align-items: center;
  height: 100vh; /* Full viewport height */
  width: 80px; /* Fixed width for the vertical navbar */
  position: fixed; /* Fixed position to stay on the left */
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  font-size: 24px;
  margin-top: 20px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column; /* Display menu items vertically */
  gap: 20px;
  margin-top: 20px;
  padding-left: 0; /* Remove default padding */
`;

const MenuItem = styled.li`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const BurgerButton = styled.div`
  display: none;
  position: fixed; /* Fixed position to stay on top */
  top: 20px; /* Adjust the top position as needed */
  left: 20px; /* Adjust the left position as needed */

  background: yellow;
  width: 10rem;
  height: 10rem;

  div{
    width: 5rem;
    height: 1rem;
    background: black;
    padding: 1rem;
  }
  @media (max-width: 500px) {
    display: block; /* Display the burger button under 500px width */
    cursor: pointer;
    margin-top: 20px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>Your Logo</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </NavbarContainer>
      <BurgerButton onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerButton>
    </>
  );
};

export default Navbar;
