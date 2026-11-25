import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="fantasy-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              ✨ Faisal's <span>World</span>
            </a>

            <p>
              Welcome to my digital world! Explore my technical skills,
              projects, and journey as an aspiring IT professional.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:mdf58535@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div className="footer-links">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <span>✦</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div className="footer-contact">
            <h3>Contact Information</h3>

            <a href="mailto:mdf58535@gmail.com">
              <FaEnvelope />
              <span>mdf58535@gmail.com</span>
            </a>

            <a href="tel:+8801753705253">
              <FaPhone />
              <span>01753705253</span>
            </a>

            <div className="footer-location">
              <FaMapMarkerAlt />
              <span>Chattogram, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>MD FAISAL MAHMUD</strong>. All Rights
            Reserved.
          </p>

          <p className="footer-made">Designed with creativity and passion.</p>

          <button
            className="back-to-top"
            onClick={goToTop}
            aria-label="Back to top"
            title="Back to Top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
