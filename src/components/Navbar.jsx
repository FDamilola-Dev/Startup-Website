import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logonew.svg";
// import "./Navbar.css"; // Your custom styles
// import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        ref={toggleRef}
      >
        ☰
        
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`} ref={navRef}>
        <li onClick={() => setIsOpen(false)}>Home</li>
        <li onClick={() => setIsOpen(false)}>Portfolio</li>
        <li onClick={() => setIsOpen(false)}>Services</li>
        <li onClick={() => setIsOpen(false)}>Contact</li>
        <li className="close-btn" onClick={toggleMenu}>×</li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
