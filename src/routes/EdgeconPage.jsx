import React from "react";

import Header from '/src/Components/Layout/Header.jsx'
import Footer from '/src/Components/Layout/Footer.jsx'
import "/src/ProjectPage.css";

const EdgeconPage = () => {
  return (
    <>
    <Header />
  
    <div className="project-page">
      <section className="project-hero">
        <div className="project-hero-text">
          <h1>Edgecon</h1>
          <p className="project-type">Corporate Website Redesign</p>
          <p className="project-desc">
            Edgecon is a construction and engineering company known for its large-scale infrastructure and energy projects. 
            I led a complete redesign of their corporate website to improve credibility, clarify information hierarchy, and 
            modernize the brand’s digital presence. The redesign focused on aligning the visual language with Edgecon’s 
            reputation for reliability and technical expertise.
          </p>
          <a 
            href="https://www.figma.com/design/Z8oBtIGy5Jz7nP2ynnFntp/Edgecon-Website?node-id=51-4107&t=WrwzBWmkn2LLUlKc-1" 
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
          The previous website lacked visual hierarchy, cohesion, and structure, making it difficult for potential clients 
          to navigate and understand Edgecon’s scope of work. The challenge was to design a modern, corporate interface that 
          communicated professionalism while remaining easy to maintain and scalable for future growth.
        </p>
  
        <h2>Design Objectives</h2>
        <ul>
          <li>Establish a consistent and modern brand identity online</li>
          <li>Enhance usability through structured layout and intuitive navigation</li>
          <li>Effectively showcase key projects and company expertise</li>
        </ul>
  
        <h2>Results</h2>
        <p>
          The redesign delivered a clean, responsive, and professional website that strengthened Edgecon’s online presence. 
          The improved layout and clear visual hierarchy enhanced engagement, trust, and client conversion potential across devices.
        </p>
      </section>
    </div>
  
    <Footer />
  </>
  
  );
};

export default EdgeconPage;
