import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState("light_theme");
  const [li, setli] = useState("bx bxs-moon");

  const toggleTheme = () => {
    if (theme === "light_theme") {
      setTheme("dark_theme");
      setli("bx bxs-sun");
    } else {
      setTheme("light_theme");
      setli("bx bxs-moon");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={() => showMenu(false)}>
          Michelle Chi
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {/* <li className="nav__item">
              <Link
                to="/"
                className={`nav__link ${location.pathname === "/" ? "active-link" : ""}`}
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li> */}

            <li className="nav__item">
              <Link
                to="/about"
                className={`nav__link ${location.pathname === "/about" ? "active-link" : ""}`}
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/skills"
                className={`nav__link ${location.pathname === "/skills" ? "active-link" : ""}`}
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/projects"
                className={`nav__link ${location.pathname === "/projects" ? "active-link" : ""}`}
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/qualification"
                className={`nav__link ${location.pathname === "/qualification" ? "active-link" : ""}`}
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-file-alt nav__icon"></i> Qualifications
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contact"
                className={`nav__link ${location.pathname === "/contact" ? "active-link" : ""}`}
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
            </li>

            <li className="nav__item">
              <div className="home__social-icon nav__icontoggle" onClick={toggleTheme}>
                <i className={li}></i>
              </div>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(false)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
