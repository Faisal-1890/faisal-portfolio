import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", target: "welcome" },
    { name: "About Me", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "Education", target: "education" },
    { name: "Contact", target: "contact" },
  ];

  const handleNavigation = (target) => {
    setIsOpen(false);

    window.dispatchEvent(
      new CustomEvent("panda-navigate", {
        detail: { target },
      }),
    );
  };

  return (
    <nav className="fantasy-navbar">
      {/* Panda Brand */}
      <button
        type="button"
        className="navbar-brand"
        onClick={() => handleNavigation("welcome")}
        aria-label="Click Panda to go to Home"
      >
        <span className="navbar-panda" aria-hidden="true">
          🐼
        </span>

        <span className="navbar-brand-text">Click Panda</span>
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <button
            type="button"
            key={link.target}
            onClick={() => handleNavigation(link.target)}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu */}
      <button
        type="button"
        className="navbar-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
