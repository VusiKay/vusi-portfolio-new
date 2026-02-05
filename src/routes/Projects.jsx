import React from 'react';
import Header from '/src/Components/Layout/Header.jsx';
import Footer from '/src/Components/Layout/Footer.jsx';
import { FiExternalLink, FiSmartphone, FiMonitor, FiTablet } from "react-icons/fi";
import { Link } from "react-router-dom";
import "/src/Projects.css";

// Import all images
import IntroductionScreen from '/src/assets/LawLens Image (1).png';
import OpenWay from '/src/assets/OpenWay Image.png';
import FarmGuardApp from '/src/assets/Results Screen FarmGuard.png';

// Sample projects data with React Router links for main projects
const projects = [
  {
    title: "LawLens",
    description:
      "A trust-first, AI-enhanced legal comprehension platform that balances clarity, transparency, and risk awareness through intentional interaction patterns and structured information design.",
    devices: ["mobile"],
    link: "/projects/lawlens",
    image: IntroductionScreen,
  },
  {
    title: "OpenWay",
    description:
      "A human-centered digital banking onboarding experience that reduces friction, anxiety, and failure rates for first-time digital banking users through clear guidance, forgiveness in errors, and transparent verification.",
    devices: ["mobile"],
    link: "/projects/openway",
    image: OpenWay,
  },
  {
    title: "FarmGuard",
    description:
      "A farmer-first mobile platform that leverages image-based plant diagnosis and localized climate insights to help small-scale farmers reduce crop risk and make more informed farming decisions.",
    devices: [ "mobile"],
    link: "/projects/farmguard",
    image: FarmGuardApp,
  },
];

function Projects() {
  return (
    <>
      <Header />

      <main className="projects-page">
        <h1 className="projects-title">My Projects.</h1>
        <p className="projects-subtitle">
          A selection of projects showcasing UI/UX, product design, and systems-thinking skills.
        </p>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image-wrap">
                <img src={p.image} alt={p.title} className="project-image" />
                <div className="project-devices">
                  {p.devices.includes("mobile") && <FiSmartphone title="Mobile" />}
                  {p.devices.includes("tablet") && <FiTablet title="Tablet" />}
                  {p.devices.includes("desktop") && <FiMonitor title="Desktop" />}
                </div>
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <Link to={p.link} className="projects-link">
                  View Project <FiExternalLink />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Projects;
