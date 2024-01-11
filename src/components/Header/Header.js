import React from "react";
import "./Header.css";

const Header = ({ onSearchChange }) => {
  return (
    <header className="app-header">
      <h1>Startup Scouter</h1>
      <input
        type="text"
        placeholder="🔎 Search postings"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </header>
  );
};

export default Header;
