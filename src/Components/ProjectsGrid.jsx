/* ProjectsGrid.jsx */
import React from "react";
 import RideLocalImg from '/src/assets/Splash Screen (Bezel).png';
import GoldenAmpleImg from '/src/assets/DesktopGA.png';
import EdgeconImg from '/src/assets/Hero DESKTOP REAL Edge.png' ;
import "/src/ProjectsGrid.css";
import { Link } from 'react-router-dom';

/* replace these with your real images and links */
const projects = [
  { id: 1, title: "RideLocal", img: RideLocalImg, href: "/src/assets/Splash Screen (Bezel).png" },
  { id: 2, title: "Golden Ample", img: GoldenAmpleImg, href: "/src/assets/Hero DESKTOP REAL Edge.png" },
  { id: 3, title: "Edgecon", img: EdgeconImg, href: "/src/assets/DesktopGA.png" },
];

export default function ProjectsGrid() {
  return (
    <div className="project-grid">
    <div className="project-card">
      <img src={RideLocalImg} alt="RideLocal mobile mockup" className="project-img" />
      <div className="project-content">
        <h3 className="project-title">RideLocal</h3>
        <p className="project-type">Mobile App Design</p>
        <p className="project-desc">
          A community-driven ride-hailing platform designed to connect passengers with reliable local drivers,
           promoting safety and trust within communities.
        </p>
        <Link to="/projects/ridelocal" className="project-link">
  <span>View project</span>
  <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z"/>
  </svg>
</Link>
      </div>
    </div>
  
    <div className="project-card">
      <img src={GoldenAmpleImg} alt="Golden Ample project" className="project-img" />
      <div className="project-content">
        <h3 className="project-title">Golden Ample</h3>
        <p className="project-type">Branding & Website Redesign</p>
        <p className="project-desc">
        A redesign of Golden Ample, a digital solutions company offering bespoke software, web development, and IT facilitation & assessor services.        </p>
        <Link to="/projects/goldenample" className="project-link">
  <span>View project</span>
  <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z"/>
  </svg>
</Link>
      </div>
    </div>
  
    <div className="project-card">
      <img src={EdgeconImg} alt="Edgecon project" className="project-img" />
      <div className="project-content">
        <h3 className="project-title">Edgecon</h3>
        <p className="project-type">Corporate Website</p>
        <p className="project-desc">
          A responsive corporate website redesign that improves client engagement and brand authority.
        </p>
        <Link to="/projects/edgecon" className="project-link">
  <span>View project</span>
  <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z"/>
  </svg>
</Link>
      </div>
    </div>
  </div>
  
  
  );
}
