import { useState } from "react";

import {
  FaNetworkWired,
  FaGithub,
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

import { FaShoppingBag } from "react-icons/fa";

function Projects() {
  const [miyunaImageIndex, setMiyunaImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Cisco Networking Project",
      category: "Networking",
      icon: <FaNetworkWired />,
      image: "/images/networking-project.JPG",
      description:
        "A practical networking project focused on basic network design, IP addressing, subnetting and network configuration using Cisco Packet Tracer.",
      technologies: [
        "Cisco Packet Tracer",
        "IP Addressing",
        "Subnetting",
        "Networking",
      ],
      number: "01",
    },
    {
      id: 2,
      title: "MIYUNA",
      subtitle: "MERN Stack E-commerce Platform",
      category: "Web Development",
      icon: <FaShoppingBag />,
      images: [
        "/images/miyuna-1.JPG",
        "/images/miyuna-2.png",
        "/images/miyuna-3.png",
        "/images/miyuna-4.png",
        "/images/miyuna-5.png",
        "/images/miyuna-6.png",
      ],
      description:
        "A MERN Stack-based e-commerce platform developed for online clothing retail, featuring product browsing, shopping cart and order management functionality.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      number: "02",
    },
  ];

  const showPreviousImage = () => {
    setMiyunaImageIndex((current) => (current === 0 ? 5 : current - 1));
  };

  const showNextImage = () => {
    setMiyunaImageIndex((current) => (current === 5 ? 0 : current + 1));
  };

  return (
    <section className="projects-section" id="projects-section">
      <div className="projects-container">
        {/* Section Heading */}
        <div className="projects-heading">
          <span className="projects-eyebrow">✨ MY CREATIVE JOURNEY</span>

          <h2>
            My <span>Projects</span>
          </h2>

          <p>
            Explore my academic and technical projects that reflect my learning
            and practical skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              {/* Card Header */}
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>

                <span className="project-category">{project.category}</span>
              </div>

              {/* Project Image */}
              <div className="project-image-wrapper">
                {project.id === 1 ? (
                  <img
                    src={project.image}
                    alt="Cisco Networking Project"
                    className="project-image"
                  />
                ) : (
                  <>
                    <img
                      src={project.images[miyunaImageIndex]}
                      alt={`MIYUNA project screenshot ${miyunaImageIndex + 1}`}
                      className="project-image"
                    />

                    {/* Previous Button */}
                    <button
                      type="button"
                      className="slider-button slider-prev"
                      onClick={showPreviousImage}
                      aria-label="Previous MIYUNA image"
                    >
                      <FaChevronLeft />
                    </button>

                    {/* Next Button */}
                    <button
                      type="button"
                      className="slider-button slider-next"
                      onClick={showNextImage}
                      aria-label="Next MIYUNA image"
                    >
                      <FaChevronRight />
                    </button>

                    {/* Image Counter */}
                    <div className="slider-counter">
                      {String(miyunaImageIndex + 1).padStart(2, "0")}
                      {" / "}
                      {String(project.images.length).padStart(2, "0")}
                    </div>
                  </>
                )}
              </div>

              {/* Project Icon */}
              <div className="project-icon">{project.icon}</div>

              {/* Project Title */}
              <h3>{project.title}</h3>

              {project.subtitle && <h4>{project.subtitle}</h4>}

              {/* Description */}
              <p className="project-description">{project.description}</p>

              {/* Technologies */}
              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="project-card-footer">
                <span>
                  <FaGithub />
                  Academic / Personal Project
                </span>

                <FaArrowUpRightFromSquare className="project-arrow" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
