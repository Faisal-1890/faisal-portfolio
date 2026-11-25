const skillCategories = [
  {
    id: 1,
    icon: "🌐",
    title: "Networking",
    subtitle: "Network Fundamentals & Configuration",
    skills: [
      "Computer Networking",
      "IP Addressing",
      "Subnetting",
      "Cisco Packet Tracer",
      "Network Configuration",
      "VLAN",
      "Inter-VLAN Routing",
      "Network Troubleshooting",
    ],
  },
  {
    id: 2,
    icon: "🖥️",
    title: "IT Support",
    subtitle: "Hardware & Software Support",
    skills: [
      "Hardware Troubleshooting",
      "Software Troubleshooting",
      "Windows OS",
      "PC Maintenance",
      "Operating System Installation",
      "Technical Documentation",
    ],
  },
  {
    id: 3,
    icon: "⚙️",
    title: "System & Administration",
    subtitle: "Fundamentals of IT Administration",
    skills: [
      "Windows Server Fundamentals",
      "Active Directory Fundamentals",
      "System Administration Basics",
      "IT Support Operations",
      "ERP Fundamentals",
    ],
  },
  {
    id: 4,
    icon: "💻",
    title: "Development & Database",
    subtitle: "Programming & Database Knowledge",
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Database Fundamentals",
      "MERN Stack Fundamentals",
    ],
  },
];

function TechnicalSkills() {
  return (
    <section id="skills" className="technical-skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="skills-eyebrow">✨ MY TECHNICAL ABILITIES</span>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <p>
            Technologies and technical knowledge I have learned and continue to
            develop for my IT career.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-card" key={category.id}>
              <div className="skill-card-top">
                <div className="skill-icon">{category.icon}</div>

                <span className="skill-card-number">0{category.id}</span>
              </div>

              <h3>{category.title}</h3>

              <p className="skill-subtitle">{category.subtitle}</p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="skill-card-line"></div>
            </article>
          ))}
        </div>

        <div className="skills-bottom-text">
          <span>✦</span>
          Always Learning · Always Improving
          <span>✦</span>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
