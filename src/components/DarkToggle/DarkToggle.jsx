import React, { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import "./DarkToggle.scss";

const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <div className="toggle-mode">
      <button onClick={toggleDarkMode}>
        {darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
        <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
      </button>
    </div>
  );
};

export default DarkToggle;
