import React, { useState} from "react";
import logo from "../assets/logonew.svg";
import { Link } from "react-router-dom";
// import "./Navbar.css"; // Your custom styles
// import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div
        className={`menu-toggle `}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <ul className="desktop-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
          </li>
        <li>
          <Link to="/contact">Contact</Link>
          </li>
        <li className="close-btn">×</li>
      </ul>

      {isOpen && (
        <ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to= "/contact">Contact</Link>
            </li>
          <li onClick={() => setIsOpen(!isOpen)} className="close-btn">×</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
