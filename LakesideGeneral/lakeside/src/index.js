import React from 'react';
import {Nav, NavLink, NavMenu}
from "./components/NavbarElements";

const Navbar = () => {
  return (
    <>
    <Nav>
      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/contact"activeStyle>
        </NavLink>
      </NavMenu>
    </Nav>
    </>
  );
};

export default Navbar;

