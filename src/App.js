import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import JobDetailsPage from "./components/JobDetailsPage/JobDetailsPage";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header onSearchChange={setSearchQuery} />
              <MainPage searchQuery={searchQuery} />
            </>
          } />
          <Route path="/job/:id" element={
            <>
              <Header showBackButton={true} />
              <JobDetailsPage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;