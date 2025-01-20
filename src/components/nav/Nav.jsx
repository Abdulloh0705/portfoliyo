import { useState } from "react";
import React from "react";
import "./nav.scss";
import { TbMenuOrder } from "react-icons/tb";


const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  // `active` classni togglash funksiyasi
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`nav ${isActive ? "no-shadow" : ""}`}>
      <div className="container">
        <button
          className={`nav_btn ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="btn_icon">
            <TbMenuOrder />
          </div>
        </button>
        <div className={`nav__box ${isActive ? "active" : ""}`}>
          <ul className={`nav__list ${isActive ? "show" : ""}`}>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#section" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
          </ul>
         <a href="/">
            <h2 className="nav__logo">Z</h2>
            </a>
          <ul className={`nav__list ${isActive ? "show" : ""}`}>
            <li className="nav__item">
              <a href="#project" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
              Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#main" className="nav__link">
                Feedback
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
