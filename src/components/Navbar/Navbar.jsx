import React from "react";
import DarkToggle from "../DarkToggle/DarkToggle";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div>
      <div className="navbar">
        <NavLink to="/" className="title">Where in the world?</NavLink>
        <DarkToggle
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default Navbar;
