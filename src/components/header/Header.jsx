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
      <button className="hamburger" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
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
    </div>
  );
};
