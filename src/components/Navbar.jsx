import React from 'react';
import './css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="app">
      <nav className="navBar">
        <div className="logo">
          <NavLink className="logoHead" exact to="/">
            Khawaja Technical
          </NavLink>
        </div>
        <ul className="navList">
          <li className="list">
            <NavLink className="link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="link" exact to="/about">
              About
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="link" exact to="/service">
              Services
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="link" exact to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
