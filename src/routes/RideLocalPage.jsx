import React from "react";

import Header from '/src/Components/Layout/Header.jsx'
import Footer from '/src/Components/Layout/Footer.jsx'
import "/src/ProjectPage.css";

const RideLocalPage = () => {
  return (
    <>
  <Header />

  <div className="project-page">
    <section className="project-hero">
      <div className="project-hero-text">
        <h1>RideLocal</h1>
        <p className="project-type">Mobile App Design</p>
        <p className="project-desc">
          A community-based ride-hailing app designed for rural areas like Kopman, Monakato, 
          and Rooikraal in Rustenburg, South Africa, connecting passengers with nearby taxis 
          through a simple, mobile-first experience that supports cash payments and real-time matching.
        </p>
        <a
          href="https://www.figma.com/design/ZNVJQqvDGSklU4QIjVybtM/RideLocal?node-id=67-5125&t=UlzQq9ksCXk4j7bW-1"
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
        In local communities around Rustenburg, taxi drivers often patrol between villages like 
        Kopman, Monakato, and Rooikraal without knowing where passengers are waiting — wasting 
        time, fuel, and missing potential customers. Existing ride-hailing apps such as Uber or Bolt 
        were unsuitable for these short-distance, community-based routes and cash-based transactions.
      </p>

      <h2>Goals</h2>
      <ul>
        <li>Design a lightweight, mobile-first solution tailored for local connectivity</li>
        <li>Help passengers easily request nearby taxis without complex setup</li>
        <li>Support cash-on-board payment and offline operation</li>
        <li>Give drivers a clear view of nearby requests and reduce empty patrols</li>
      </ul>

      <h2>Outcome</h2>
      <p>
        Delivered a high-fidelity prototype that demonstrates a simple request-and-match system, 
        real-time taxi status updates, and a trust-based passenger-driver verification flow. 
        The result is a design that reflects how local transport truly operates, practical, 
        low-data, and built around community trust rather than corporate scale.
      </p>
    </section>
  </div>

  <Footer />
</>

  );
};

export default RideLocalPage;
