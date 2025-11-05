import React from "react";

import Header from '/src/Components/Layout/Header.jsx'
import Footer from '/src/Components/Layout/Footer.jsx'
import "/src/ProjectPage.css";

const GoldenAmplePage = () => {
  return (
    <>
    <Header />
    <div className="project-page">
      <section className="project-hero">
        <div className="project-hero-text">
          <h1>Golden Ample</h1>
          <p className="project-type">Website Design & Brand Identity</p>
          <p className="project-desc">
            Golden Ample is my own digital solutions agency specializing in bespoke software development, web design, and IT facilitation. 
            I originally launched the website in 2021 to establish a clean, credible online presence, avoiding flashy visuals in favor of 
            clarity, structure, and professional tone. Recently, I refined its design in Figma to modernize the experience and strengthen 
            visual hierarchy while keeping its original simplicity intact.
          </p>
          <a 
            href="https://www.figma.com/design/zTgj4FQq4Cisr9M174fVe6/GoldenAmple-Website?node-id=468-35&t=jfHq19SRQhhJY6f2-1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="read-full"
          >
            View Full Case Study
          </a>
        </div>
      </section>
  
      <section className="project-summary">
        <h2>Design Challenge</h2>
        <p>
          The initial live version met functional goals but lacked a defined design system, strong visual hierarchy, and cohesive branding. 
          The challenge was to evolve the website without losing its simplicity, aligning it more closely with modern UI/UX standards 
          while keeping the minimal tone that represents trust and professionalism.
        </p>
  
        <h2>Design Objectives</h2>
        <ul>
          <li>Introduce a consistent visual system and hierarchy</li>
          <li>Refine layout and typography for clarity and balance</li>
          <li>Enhance responsiveness and accessibility across devices</li>
        </ul>
  
        <h2>Results</h2>
        <p>
          The redesign delivered a more cohesive, responsive experience that highlights Golden Ample’s service offering with improved 
          readability, structured navigation, and a cleaner brand presence, positioning it as a credible and modern digital agency.
        </p>
      </section>
    </div>
    <Footer />
  </>
  
  );
};

export default GoldenAmplePage;
