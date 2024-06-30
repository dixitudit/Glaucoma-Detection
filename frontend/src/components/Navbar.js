import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/images/logo.jpeg" alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/diagnosis">Diagnosis</Link></li>
        <li><Link to="/results">Results</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
