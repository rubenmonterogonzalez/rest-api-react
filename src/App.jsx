import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";
import Country from "./components/Country/Country"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
