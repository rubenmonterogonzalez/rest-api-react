import React, { useState } from "react";
import "./App.scss";
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isActive, setActive] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setActive(!isActive);
  };

  const styleElement = {
    backgroundColor: darkMode ? "#242424" : "white",
    color: darkMode ? "white" : "#242424",
  };

  return (
    <div className={isActive ? "dark-mode" : null}>
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        style={styleElement}
      />
      <Countries />
    </div>
  );
}

export default App;
