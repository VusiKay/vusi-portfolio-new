/* ProjectsGrid.jsx */
import React from "react";
 import LawLensImg from '/src/assets/LawLens Mobile App Image (1).png';
import OpenWayImg from '/src/assets/OpenWay Mobile App (1).png';
import FarmGuardImg from '/src/assets/Splash Screen FarmGurad.png' ;
import "/src/ProjectsGrid.css";
import { Link } from 'react-router-dom';

/*  images and links */
const projects = [
  { id: 1, title: "LawLens", img: LawLensImg, href: "/src/assets/LawLens Mobile App Image (1).png" },
  { id: 2, title: "openway", img: OpenWayImg, href: "/src/assets/OpenWay Mobile App (1).png" },
  { id: 3, title: "FarmGuard", img: FarmGuardImg, href: "/src/assets/Splash Screen FarmGurad.png" },
];

export default function ProjectsGrid() {
  return (
    <div className="project-grid">
    <div className="project-card">
      <img src={LawLensImg} alt="LawLens mobile mockup" className="project-img" />
      <div className="project-content">
        <h3 className="project-title">LawLens</h3>
        <p className="project-type">End-to-End Product Design</p>

        <p className="project-desc">
    An AI-assisted legal comprehension experience that transforms complex contracts into 
    clear, actionable insights, helping everyday users identify risks, understand key clauses, 
    and make more confident decisions through structured information design and intuitive interactions.
  </p>
        <Link to="/projects/lawlens" className="project-link">
  <span>View project</span>
  <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z"/>
  </svg>
</Link>
      </div>
    </div>
  
    <div className="project-card">
      <img src={OpenWayImg} alt="Open Way Project" className="project-img" />
      <div className="project-content">
        <h3 className="project-title">openWay</h3>
        <p className="project-type">UX Strategy & Product Design</p>

        <p className="project-desc">
        A trust-first digital banking onboarding experience designed to make KYC intuitive,
         reassuring, and accessible for first-time digital users, 
         minimizing errors while maintaining regulatory compliance and user confidence.      </p>
        <Link to="/projects/openway" className="project-link">
  <span>View project</span>
  <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z"/>
  </svg>
</Link>
      </div>
    </div>
  
    <div className="project-card">
      <img src={FarmGuardImg} alt="FarmGuard" className="project-img" />
      <div className="project-content">
        <h3 className="project-title">FarmGuard</h3>
        <p className="project-type">Mobile App Design</p>
        <p className="project-desc">
      A smart agriculture app that helps farmers diagnose plant diseases using their camera and
      make proactive decisions through localized weather insights and actionable farm tips.
    </p>
        <Link to="/projects/farmguard" className="project-link">
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
