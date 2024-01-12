import React from 'react';
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = ({ onSearchChange, showBackButton = false }) => {
  return (
    <header className="app-header">
      <h1>Startup Scouter</h1>
      {showBackButton ? (
        <Link to="/" className="back-button">Back</Link>
      ) : (
        <input
          type="text"
          placeholder="🔎 Search postings"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      )}
    </header>
  );
};

export default Header;