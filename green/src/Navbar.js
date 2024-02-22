
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Green Living Assistant</h2>
      <div>
        <Link to="/">Home</Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
}

export default Navbar;