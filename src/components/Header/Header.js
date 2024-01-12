import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onSearchChange, showBackButton = false }) => {
  return (
    <header className="app-header">
      <h1>Startup Scouter</h1>
      {showBackButton ? (<Link to={"/"} className="back-button">Back</Link> ) : (
        <div className="search-bar">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search postings"
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
