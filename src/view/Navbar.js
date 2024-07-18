// Navbar.js
import React from 'react';
import '../css/Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/Home">About Trenton</a></li>
        <li><a href="/BDOCulture">BDO Culture</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
