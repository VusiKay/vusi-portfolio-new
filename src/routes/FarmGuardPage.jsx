import React from "react";

import Header from '/src/Components/Layout/Header.jsx'
import Footer from '/src/Components/Layout/Footer.jsx'
import "/src/ProjectPage.css";

const FarmGuardPage = () => {
  return (
    <>
  <Header />

  <div className="project-page">
    <section className="project-hero">
      <div className="project-hero-text">
        <h1>FarmGuard</h1>
        <p className="project-type">Mobile App Design</p>
        <p className="project-desc">
            A smart agriculture mobile app designed to help small-scale farmers identify plant 
            diseases through camera-based diagnosis while providing localized weather insights 
            and actionable farm tips — enabling more informed, proactive crop management decisions.
          </p>
        <a
          href="https://www.figma.com/design/Tv5m5C9QjZQdJYuk7IIcw4/FarmGuard?node-id=201-582&t=yBXcieJUBT5Z20tG-1"
          target="_blank"
          rel="noopener noreferrer"
          className="read-full"
        >
          Read Full Case Study
        </a>
      </div>
    </section>

    <section className="project-summary">
      <h2>Problem</h2>
      <p>
          Many small-scale farmers struggle to accurately diagnose plant diseases early enough, 
          often relying on trial and error, costly expert consultations, or unreliable online 
          sources. Additionally, weather unpredictability in regions like Gauteng makes it difficult 
          for farmers to prepare for risks such as heavy rain, strong winds, or extreme UV exposure, 
          leading to avoidable crop loss.
        </p>

      <h2>Goals</h2>
      <ul>
          <li>Design a simple, mobile-first solution tailored for farmers with varying digital literacy</li>
          <li>Enable quick plant disease diagnosis using the device camera</li>
          <li>Provide clear, localized weather forecasts with actionable farming tips</li>
          <li>Reduce crop loss through early detection and proactive decision-making</li>
        </ul>

      <h2>Outcome</h2>
      <p>
          Delivered a high-fidelity prototype featuring an intuitive camera-based diagnosis flow, 
          clear visual results with recommended remedies, and a personalized dashboard that combines 
          weather insights with practical farm tips. The final design balances usability, accessibility, 
          and agricultural relevance — creating a scalable, farmer-centered tool that supports smarter 
          and more sustainable farming practices.
        </p>
    </section>
  </div>

  <Footer />
</>

  );
};

export default FarmGuardPage;
