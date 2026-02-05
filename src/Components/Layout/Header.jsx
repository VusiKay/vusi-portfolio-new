import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const style = { color: "wheat" };

  return (
    <>
      <div className="header-container">
        <NavLink className="logo-link" to="/home">
          <p className="logo">
            Katlego <span style={style}>VM.</span>
          </p>
        </NavLink>

        <div className="links-container">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "menu-links active" : "menu-links"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "menu-links active" : "menu-links"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "menu-links active" : "menu-links"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "menu-links active" : "menu-links"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Hamburger icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink
          onClick={closeMenu}
          to="/home"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          onClick={closeMenu}
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>

        <NavLink
          onClick={closeMenu}
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>

        <NavLink
          onClick={closeMenu}
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default Header;
