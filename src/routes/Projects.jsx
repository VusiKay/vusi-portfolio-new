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
import HomePageGoldenAmple from '/src/assets/HomePageGoldenAmple.png';

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
      "An e-commerce platform offering a curated selection of premium apple products, from fresh harvests to artisanal ciders and gourmet gifts.",
    devices: ["desktop"],
    link: "/projects/goldenample",
    image: DesktopGA,
  },
  {
    title: "Edgecon",
    description:
      "A comprehensive conference management system designed to streamline event planning, registration, and attendee engagement for tech conferences.",
    devices: ["desktop"],
    link: "/projects/edgecon",
    image: HeroDesktop,
  },
];

function Projects() {
  return (
    <>
      <Header />
      <div className="projects-page">
        <div className="projects-hero">
          <h1>Selected Projects</h1>
          <p>
            A collection of projects where design, functionality, and user experience converge to create meaningful digital solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <Link to={project.link} className="project-link">
                    View Case Study <FiExternalLink />
                  </Link>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-devices">
                  {project.devices.includes("mobile") && <FiSmartphone />}
                  {project.devices.includes("desktop") && <FiMonitor />}
                  {project.devices.includes("tablet") && <FiTablet />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
