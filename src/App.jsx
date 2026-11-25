import { useState, useEffect } from "react";
import "./App.css";

import MagicEffects from "./components/world/MagicEffects";
import Navbar from "./components/world/Navbar";
import Projects from "./components/sections/Projects";
import TechnicalSkills from "./components/sections/TechnicalSkills";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Snowfall from "./components/effects/Snowfall";
import OwlAnimation from "./components/effects/OwlAnimation";

// =================================
// PANDA CHARACTER INFORMATION
// =================================

const pandaCharacters = [
  {
    id: "about",
    name: "About Me",
    position: {
      left: "14.5%",
      top: "8%",
      width: "11%",
      height: "17%",
    },
    title: "About Me",
    description:
      "Hello! I am MD FAISAL MAHMUD, a CSE graduate and aspiring IT professional.",
    details: [
      "BSc in Computer Science & Engineering",
      "Premier University, Chattogram",
      "Interested in IT Support and Networking",
    ],
  },

  {
    id: "skills",
    name: "Skills",
    position: {
      left: "29.5%",
      top: "44%",
      width: "10.5%",
      height: "20%",
    },
    title: "Technical Skills",
    description: "My technical knowledge and areas of interest.",
    details: [
      "Computer Networking",
      "IP Addressing & Subnetting",
      "Cisco Packet Tracer",
      "Network Troubleshooting",
      "Hardware & Software Troubleshooting",
      "Windows Operating System",
      "MongoDB and MERN Stack Fundamentals",
    ],
  },

  {
    id: "projects",
    name: "Projects",
    position: {
      left: "5%",
      top: "45%",
      width: "20%",
      height: "27%",
    },
    title: "My Projects",
    description: "Explore my academic and development projects.",
    details: [
      "Cisco Networking Project",
      "MIYUNA – MERN Stack E-commerce Platform",
    ],
  },

  {
    id: "education",
    name: "Education",
    position: {
      left: "62%",
      top: "45%",
      width: "17%",
      height: "26%",
    },
    title: "Education",
    description: "My academic background.",
    details: [
      "Bachelor of Science in Computer Science & Engineering",
      "Premier University, Chattogram",
    ],
  },

  {
    id: "contact",
    name: "Contact",
    position: {
      left: "79%",
      top: "55%",
      width: "20%",
      height: "23%",
    },
    title: "Contact Me",
    description: "Let's connect and discuss opportunities.",
    details: ["Email: mdf58535@gmail.com"],
  },

  {
    id: "welcome",
    name: "Welcome",
    position: {
      left: "41%",
      top: "43%",
      width: "22%",
      height: "45%",
    },
    title: "Welcome to Panda World!",
    description:
      "Welcome to my interactive portfolio. Explore the magical world to discover my skills, education and projects.",
    details: ["MD FAISAL MAHMUD", "CSE Graduate | Aspiring IT Professional"],
  },
];

// =================================
// WOODEN SIGNBOARD INFORMATION
// =================================

const navigationSigns = [
  {
    id: "about",
    label: "About Me",
    position: {
      left: "9%",
      top: "25%",
      width: "16%",
      height: "9%",
    },
  },

  {
    id: "skills",
    label: "Skills",
    position: {
      left: "29%",
      top: "32%",
      width: "13%",
      height: "10%",
    },
  },

  {
    id: "projects",
    label: "Projects",
    position: {
      left: "20%",
      top: "60%",
      width: "14%",
      height: "9%",
    },
  },

  {
    id: "education",
    label: "Education",
    position: {
      left: "60%",
      top: "40%",
      width: "15%",
      height: "10%",
    },
  },

  {
    id: "contact",
    label: "Contact",
    position: {
      left: "70%",
      top: "66%",
      width: "15%",
      height: "9%",
    },
  },

  {
    id: "welcome",
    label: "Panda World",
    position: {
      left: "83%",
      top: "35%",
      width: "15%",
      height: "9%",
    },
  },
];

// =================================
// MAIN APP COMPONENT
// =================================

function App() {
  const [activePanda, setActivePanda] = useState(null);

  // Open panda information
  const openInformation = (id) => {
    const selected = pandaCharacters.find((panda) => panda.id === id);

    if (selected) {
      setActivePanda(selected);
    }
  };

  // Close information modal
  const closeInformation = () => {
    setActivePanda(null);
  };

  // =================================
  // NAVBAR EVENT CONNECTION
  // =================================

  useEffect(() => {
    const handleNavbarNavigation = (event) => {
      const target = event.detail?.target;

      const selected = pandaCharacters.find((panda) => panda.id === target);

      if (selected) {
        setActivePanda(selected);
      }
    };

    window.addEventListener("panda-navigate", handleNavbarNavigation);

    return () => {
      window.removeEventListener("panda-navigate", handleNavbarNavigation);
    };
  }, []);

  // =================================
  // RENDER
  // =================================

  return (
    <main className="panda-world">
      <Snowfall />
      {/* TOP NAVIGATION */}
      <Navbar />

      <OwlAnimation />

      {/* MAIN FANTASY WORLD */}
      <div className="world-stage">
        {/* ORIGINAL BACKGROUND */}
        <img
          src="/panda-world-reference.png"
          alt="Panda World magical fantasy portfolio"
          className="world-background"
          draggable="false"
        />

        {/* MAGICAL PARTICLES */}
        <MagicEffects />

        {/* CENTRAL WIZARD PANDA AURA */}
        <div className="wizard-aura" aria-hidden="true" />

        {/* INTERACTIVE PANDA AND SIGNBOARD LAYER */}
        <div className="interaction-layer">
          {/* PANDA CLICKABLE AREAS */}
          {pandaCharacters.map((panda) => (
            <button
              key={panda.id}
              type="button"
              className={`panda-hotspot panda-${panda.id}`}
              style={panda.position}
              onClick={() => openInformation(panda.id)}
              aria-label={`Explore ${panda.name}`}
              title={`Click to explore ${panda.name}`}
            >
              <span className="hotspot-tooltip">{panda.name}</span>
            </button>
          ))}

          {/* WOODEN SIGNBOARD CLICKABLE AREAS */}
          {navigationSigns.map((sign) => (
            <button
              key={sign.id}
              type="button"
              className="sign-hotspot"
              style={sign.position}
              onClick={() => openInformation(sign.id)}
              aria-label={`Open ${sign.label}`}
              title={sign.label}
            />
          ))}
        </div>
      </div>

      {/* SEARCH-FRIENDLY INTRODUCTION */}
      <section className="portfolio-intro" aria-labelledby="portfolio-main-heading">
        <div className="portfolio-intro-content">
          <p className="portfolio-intro-eyebrow">WELCOME TO MY PORTFOLIO</p>
          <h1 id="portfolio-main-heading">
            Md Faisal Mahmud <span>— CSE Graduate &amp; Aspiring IT Professional</span>
          </h1>
          <p>
            I am a Computer Science and Engineering graduate from Premier
            University, Chattogram, Bangladesh. My interests include IT support,
            computer networking, troubleshooting, and MERN stack web
            development. Explore my technical skills and projects, including
            MIYUNA, my MERN stack-based clothing e-commerce platform.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION BELOW PANDA WORLD */}
      <Projects />

      <TechnicalSkills />

      <Contact />

      <Footer />
      {/* =================================
          INFORMATION MODAL
      ================================= */}

      {activePanda && (
        <div className="modal-overlay" onClick={closeInformation}>
          <section
            className="fantasy-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="modal-close"
              onClick={closeInformation}
              aria-label="Close modal"
            >
              ×
            </button>

            {/* PANDA ICON */}
            <div className="modal-icon">🐼</div>

            {/* MODAL TITLE */}
            <h2 id="modal-title">{activePanda.title}</h2>

            {/* DESCRIPTION */}
            <p>{activePanda.description}</p>

            {/* INFORMATION LIST */}
            <ul>
              {activePanda.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            {/* CONTACT EMAIL */}
            {activePanda.id === "contact" && (
              <a className="email-link" href="mailto:mdf58535@gmail.com">
                Send Me an Email
              </a>
            )}

            {/* BACK BUTTON */}
            <button
              type="button"
              className="modal-back-button"
              onClick={closeInformation}
            >
              Back to Panda World
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
