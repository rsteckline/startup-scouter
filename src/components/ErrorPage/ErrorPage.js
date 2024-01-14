import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = ({ error }) => {
  const errorMessage =
    error?.message || "Sorry, the page you are looking for does not exist.";
  return (
    <div className="error-page">
      <div className="error-message">{errorMessage}</div>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
