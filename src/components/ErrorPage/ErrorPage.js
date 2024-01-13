import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className="error-message">
      <h1>Sorry, the page you are looking for does not exist.</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
