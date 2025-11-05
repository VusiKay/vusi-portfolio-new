import React from 'react';
import Header from '/src/Components/Layout/Header.jsx';
import Footer from '/src/Components/Layout/Footer.jsx';
import { FiExternalLink, FiSmartphone, FiMonitor, FiTablet } from "react-icons/fi";
import { Link } from "react-router-dom";
import "/src/Projects.css";

// Import all images
import SplashScreen from '/src/assets/Splash Screen (Bezel).png';
import DesktopGA from '/src/assets/DesktopGA.png';
import HeroDesktop from '/src/assets/Hero DESKTOP REAL Edge.png';

// Sample projects data with React Router links for main projects
const projects = [
  {
    title: "RideLocal",
    description:
      "A community-driven ride-hailing platform connecting passengers with trusted local drivers, emphasizing safety and trust within communities.",
    devices: ["mobile"],
    link: "/projects/ridelocal",
    image: SplashScreen,
  },
  {
    title: "Golden Ample",
    description:
      "A redesign of Golden Ample, a digital solutions company offering bespoke software, website development, and IT facilitation & assessor services.",
    devices: ["desktop", "tablet", "mobile"],
    link: "/projects/goldenample",
    image: DesktopGA,
  },
  {
    title: "Edgecon",
    description:
      "A responsive corporate website redesign that improves client engagement and brand authority.",
    devices: ["desktop", "tablet", "mobile"],
    link: "/projects/edgecon",
    image: HeroDesktop,
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
