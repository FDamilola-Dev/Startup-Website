import React from "react";
import logo from '../assets/logonew.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt="" /></div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;