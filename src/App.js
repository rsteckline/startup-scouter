import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import JobDetailsPage from "./components/JobDetailsPage/JobDetailsPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={[
              <Header key="header" onSearchChange={setSearchQuery} />,
              <MainPage key="main" searchQuery={searchQuery} />,
            ]}
          />
          <Route
            path="/job/:id"
            element={[
              <Header key="header" showBackButton={true} />,
              <JobDetailsPage key="details" />,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
