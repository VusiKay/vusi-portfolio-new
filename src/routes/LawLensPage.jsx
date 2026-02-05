import React from "react";

import Header from '/src/Components/Layout/Header.jsx'
import Footer from '/src/Components/Layout/Footer.jsx'
import "/src/ProjectPage.css";

const LawLensPage = () => {
  return (
    <>
    <Header />
  
    <div className="project-page">
      <section className="project-hero">
        <div className="project-hero-text">
          <h1>LawLens</h1>
          <p className="project-type">End-to-End Product Design</p>
          <p className="project-desc">
            LawLens is an AI-assisted legal document comprehension platform designed to help non-lawyers 
            understand complex contracts with clarity and confidence. I led the end-to-end product design, 
            defining the user experience, information architecture, interaction model, and visual system. 
            The design prioritizes trust, transparency, and cognitive ease, ensuring that users can surface risks, 
            interpret key clauses, and make informed decisions before signing.
          </p>
          <a 
            href="https://www.figma.com/design/1pqbQMt35dV5wmMp1RZQDk/LawLens?node-id=69-123&t=8UmtfQLzBCU8e8BW-1" 
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
          Many users struggle to interpret legal documents due to dense language, hidden risks, and lack of 
          contextual guidance. The challenge was to design an intuitive, AI-powered experience that simplifies 
          legal complexity without oversimplifying meaning, while maintaining credibility, transparency, and 
          user trust in a highly sensitive domain.
        </p>
  
        <h2>Design Objectives</h2>
        <ul>
          <li>Reduce cognitive load when interpreting legal documents</li>
          <li>Clearly surface risks, key clauses, and actionable insights</li>
          <li>Create a structured, card-based UI that supports scanning and comprehension</li>
          <li>Integrate AI-driven explanations while maintaining user control and transparency</li>
          <li>Design robust error handling for real-world document scanning scenarios</li>
        </ul>
  
        <h2>Results</h2>
        <p>
          LawLens delivers a structured, human-centered legal comprehension experience that transforms complex 
          contracts into clear, actionable insights. The intuitive flow, visual hierarchy, and AI-assisted 
          explanations improved clarity, user confidence, and decision-making. The system also accounts for 
          real-world errors through thoughtful error states, ensuring a resilient and trustworthy user journey.
        </p>
      </section>
    </div>
  
    <Footer />
  </>
  
  );
};

export default LawLensPage;
