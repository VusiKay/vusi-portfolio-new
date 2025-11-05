import React from "react";
import "./AboutPreview.css";
import portrait from "./assets/VKM.jpg"; // replace with your image or remove line to use background color

export default function AboutPreview() {
  return (
    <section className="about-preview" aria-labelledby="about-preview-title">
      <div className="about-card">
        <div className="about-media" aria-hidden="true">
          {/* If you don't have a portrait, you can keep a decorative SVG or remove the <img> */}
          <img src={portrait} alt="" className="about-portrait" />
        </div>

        <div className="about-content">
          <h2 id="about-preview-title" className="about-title">A bit about my journey</h2>

          <p className="about-text">
            I started my career in systems development — writing code and learning how things work behind the screen. Over time, that technical grounding evolved into a passion for crafting meaningful design systems and user experiences.
          </p>

          <p className="about-cta">
            Curious about my journey?{" "}
            <a className="about-link" href="/about" aria-label="Learn more about Katlego Mthombeni">
              Learn more about me →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
