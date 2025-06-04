import React from 'react';


function Navbar({ setActiveSection }) {
  return (
    <nav className="nav-container">
      <h1 className="Main-head">Plant Disease Detection System</h1>
      <ul className="nav-items">
        <li onClick={() => setActiveSection('home')}>Home</li>
        <li onClick={() => setActiveSection('about')}>About</li>
        <li onClick={() => setActiveSection('features')}>Features</li>
        <li onClick={() => setActiveSection('detect')}>Detect</li>
      </ul>
    </nav>
  );
}

export default Navbar;
