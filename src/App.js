import React, { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header"

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Header onSearchChange={setSearchQuery} />
      <main>
        <MainPage searchQuery={searchQuery} /> 
      </main>
    </div>
  );
}

export default App;
