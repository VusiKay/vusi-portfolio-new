import React from 'react';
import Header from '/src/Components/Layout/Header.jsx';
import Footer from '/src/Components/Layout/Footer.jsx';
import { FiExternalLink, FiSmartphone, FiMonitor, FiTablet } from "react-icons/fi";
import { Link } from "react-router-dom";
import "/src/Projects.css";

// Sample projects data with React Router links for main projects
const projects = [
  {
    title: "RideLocal",
    description:
      "A community-driven ride-hailing platform connecting passengers with trusted local drivers, emphasizing safety and trust within communities.",
    devices: ["mobile"],
    link: "/projects/ridelocal",
    image: "/src/assets/Splash Screen (Bezel).png",
  },
  {
    title: "Golden Ample",
    description:
      "A redesign of Golden Ample, a digital solutions company offering bespoke software, website development, and IT facilitation & assessor services.",
    devices: ["desktop", "tablet", "mobile"],
    link: "/projects/goldenample",
    image: "/src/assets/DesktopGA.png",
  },
  {
    title: "Edgecon",
    description:
      "A responsive corporate website redesign that improves client engagement and brand authority.",
      devices: ["desktop", "tablet", "mobile"],
    link: "/projects/edgecon",
    image: "/src/assets/Hero DESKTOP REAL Edge.png",
  },
  /* {
    title: "Farmers’ App Design",
    description:
      "A mobile-first UI/UX project for farmers to track crops, manage tasks, and visualize growth using intuitive dashboards and notifications.",
    devices: ["mobile", "tablet"],
    link: "#",
    image: "/src/assets/Splash Screen (Bezel).png",
  },
  {
    title: "Portfolio Website UI",
    description:
      "Designed and implemented a modern portfolio website, showcasing skills in UI/UX design, frontend coding, and responsive layouts.",
    devices: ["desktop", "tablet"],
    link: "#",
    image: "/src/assets/DesktopGA.png",
  },
  {
    title: "Sports Admin Dashboard",
    description:
      "A web-based dashboard for sports administration: managing events, participants, and schedules, blending design usability with backend logic.",
    devices: ["desktop"],
    link: "#",
    image: "/src/assets/Hero DESKTOP REAL Edge.png",
  },
  {
    title: "Design System Case Study",
    description:
      "Developed a scalable design system incorporating typography, spacing, color palettes, and component libraries to unify product experiences.",
    devices: ["desktop", "tablet", "mobile"],
    link: "#",
    image: "/src/assets/HomePageGoldenAmple.png",
  },
  {
    title: "UI/UX Case Study: Travel App",
    description:
      "A conceptual travel app demonstrating seamless onboarding, exploration, and booking flows with attention to accessibility and responsiveness.",
    devices: ["mobile", "tablet"],
    link: "#",
    image: "/src/assets/HomePageGoldenAmple.png",
  }, */
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
                {p.link.startsWith("#") ? (
                  <a href={p.link} className="projects-link">
                    View Project <FiExternalLink />
                  </a>
                ) : (
                  <Link to={p.link} className="projects-link">
                    View Project <FiExternalLink />
                  </Link>
                )}
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
