import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ onSearchChange, showBackButton }) => {
  return (
    <header className="app-header">
      <h1>Startup Scouter</h1>
      {showBackButton ? (
        <Link to={"/"} className="back-button">
          Back
        </Link>
      ) : (
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search postings"
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            aria-label="Search postings"
            name="searchQuery"
          />
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  showBackButton: PropTypes.bool,
};

Header.defaultProps = {
  showBackButton: false,
};

export default Header;
