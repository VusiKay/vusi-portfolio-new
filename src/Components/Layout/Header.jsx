import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const style = { color: "wheat" };

  return (
    <>
      <div className="header-container">
        <Link className="logo-link" to="/home">
          <p className="logo">
            Katlego <span style={style}>VM.</span>
          </p>
        </Link>

        <div className="links-container">
          <Link className="menu-links" to="/home">
            Home
          </Link>
          <Link className="menu-links" to="/about">
            About
          </Link>
          <Link className="menu-links" to="/projects">
            Projects
          </Link>
          <Link className="menu-links" to="/contact">
            Contact
          </Link>
        </div>

        {/* Hamburger icon for mobile/tablet */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Overlay menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link onClick={closeMenu} to="/home">Home</Link>
        <Link onClick={closeMenu} to="/about">About</Link>
        <Link onClick={closeMenu} to="/projects">Projects</Link>
        <Link onClick={closeMenu} to="/contact">Contact</Link>
      </div>
    </>
  );
}

export default Header;