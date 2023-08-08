import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`header ${isNavOpen ? "open" : ""}`}>
<<<<<<< HEAD
      <div className="logo-container">
        <img src="./myImage.png" alt="Logo" className="logo" />
      </div>
=======
      <button className="hamburger" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
>>>>>>> 605ff0441b6bc933cf085d32597e383a0424ca37
      <nav>
        <ul className={`nav ${isNavOpen ? "nav-enter" : "nav-exit"}`}>
          <li>
            <NavLink exact to="/" onClick={toggleNav}>
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={toggleNav}>
              Kompetens
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" onClick={toggleNav}>
              Erfarenhet
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" onClick={toggleNav}>
              Utbildningar
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv" onClick={toggleNav}>
              CV
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleNav}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
<<<<<<< HEAD
      <button className="hamburger" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
=======
>>>>>>> 605ff0441b6bc933cf085d32597e383a0424ca37
    </div>
  );
};
