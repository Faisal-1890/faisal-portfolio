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
      <button
        className="navbar-brand"
        onClick={() => handleNavigation("welcome")}
      >
        ✨ Faisal's World
      </button>

      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.target}
            onClick={() => handleNavigation(link.target)}
          >
            {link.name}
          </button>
        ))}
      </div>

      <button
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
