import React, { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import "./Navbar.scss";

const Navbar = ({toggleDarkMode, darkMode, styleElement}) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isActive, setActive] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     setActive(!isActive);
//   };

//   const styleElement = {
//     backgroundColor: darkMode ? "#242424" : "white",
//     color: darkMode ? "white" : "#242424",
//   };

  return (
    <>
      <div className="navbar" style={styleElement}>
        <h1 className="title">Where in the world?</h1>
        <div className="toggle-mode">
          <button style={styleElement} onClick={() => toggleDarkMode()}>
            {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

//   const switchMode = () => {
//     console.log("click");
//     const body = document.body;
//     const text = document.querySelector("span");
//     body.classList.toggle("dark-mode");

//     if (body.classList.contains("dark-mode")) {
//       text.textContent = "Light Mode";
//     } else {
//       text.textContent = "Dark Mode";
//     }
//   };
