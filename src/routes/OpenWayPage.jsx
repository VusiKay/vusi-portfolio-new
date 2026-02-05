import React from "react";

import Header from '/src/Components/Layout/Header.jsx'
import Footer from '/src/Components/Layout/Footer.jsx'
import "/src/ProjectPage.css";

const OpenWayPage = () => {
  return (
    <>
    <Header />
    <div className="project-page">
      <section className="project-hero">
        <div className="project-hero-text">
          <h1>OpenWay</h1>
          <p className="project-type">UX Strategy & Product Design</p>

          <p className="project-desc">
          OpenWay is a concept digital banking onboarding experience designed to reduce friction, anxiety, and failure rates for first-time digital banking users. 
            The project reimagines KYC (Know Your Customer) onboarding through clear guidance, progressive disclosure, and human-centered error handling. 
            By balancing compliance requirements with usability, OpenWay aims to make financial access more inclusive, intuitive, and trustworthy for digitally inexperienced users.
          </p>
          <a 
            href="https://www.figma.com/design/jj4fppzqF9NVhorgBPU1Ub/OpenWay?node-id=89-823&t=Lo7LJx0pLwY2mxyG-1" 
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
          Traditional digital banking onboarding often overwhelms first-time users with complex language, rigid flows, and unforgiving error handling — leading to high drop-off rates and failed KYC submissions. 
          The challenge was to design an onboarding experience that remains compliant with banking regulations while feeling approachable, transparent, and supportive rather than intimidating.
        </p>
  
        <h2>Design Objectives</h2>
        <ul>
          <li>Reduce cognitive load through clear, step-by-step guidance</li>
          <li>Design a structured yet flexible KYC flow with visible progress</li>
          <li>Integrate humane error states that educate rather than punish users</li>
          <li>Build trust through transparent consent, data security messaging, and visual clarity</li>
        </ul>
  
        <h2>Results</h2>
        <p>
          OpenWay delivers a structured, empathetic onboarding experience that guides users confidently from account selection to successful account creation. 
          The prototype demonstrates a clear task flow, contextual instructions, intentional visual hierarchy, and thoughtful error handling — including a discreet demo hotspot for showcasing failure states without disrupting the primary (happy) path. 
          The result is a scalable, user-centered onboarding model that balances regulatory requirements with accessibility, usability, and trust.
        </p>
      </section>
    </div>
    <Footer />
  </>
  
  );
};

export default OpenWayPage;
