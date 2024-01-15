import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import JobDetailsPage from "./components/JobDetailsPage/JobDetailsPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={[
              <Header key="header" onSearchChange={handleSearchChange} />,
              <MainPage key="main" searchQuery={searchQuery} />,
            ]}
          />
          <Route
            path="/job/:id"
            element={[
              <Header key="header" onSearchChange={() => {}} showBackButton={true} />,
              <JobDetailsPage key="details" />,
            ]}
          />
          <Route path="*" element={<ErrorPage error={{ message: "Sorry, the page you are looking for does not exist." }} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;