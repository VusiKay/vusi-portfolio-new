import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from '/src/Components/Layout/Header.jsx';
import Footer from '/src/Components/Layout/Footer.jsx';
import meet from "/src/assets/meet.jpg"; 
import "/src/Contact.css";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiUser, FiMessageSquare, } from "react-icons/fi";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const eobj = validate();
    if (Object.keys(eobj).length) {
      setErrors(eobj);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

    return(
   <>
        <Header />
        
        <div className="contact-image-container">
          
        <img src={meet} alt="contact image" className='contact-img' />
        
        </div>

        <main className="contact-page">
      <div className="contact-wrapper">
        <section className="contact-info">
          <h1 className="contact-title">Get in touch.</h1>
          <p className="contact-sub">
            I’m Katlego Mthombeni — Product & UI/UX Designer with a systems development and frontend engineering background. I also bring leadership from sports administration and work as an accredited MICT & CATHSSETA Assessor.
            <br />
            Based in South Africa — available for remote and local opportunities.
          </p>

          <div className="contact-cards">
            <div className="card">
              <FiMail className="card-icon" aria-hidden="true" />
              <div>
                <h4>Email</h4>
                <a href="mailto:voltairmthombeni@gmail.com" className="card-link">voltairmthombeni@gmail.com</a>
              </div>
            </div>

            <div className="card">
              <FiMapPin className="card-icon" aria-hidden="true" />
              <div>
                <h4>Location</h4>
                <span>South Africa, Pretoria</span>
              </div>
            </div>

            {/* <div className="card">
              <FiLinkedin className="card-icon" aria-hidden="true" />
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/katlego-mthombeni" target="_blank" rel="noreferrer" className="card-link">linkedin.com/in/katlego-mthombeni</a>
              </div>
            </div> */}

            {/* <div className="card">
              <FiGithub className="card-icon" aria-hidden="true" />
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/katlego" target="_blank" rel="noreferrer" className="card-link">github.com/katlego</a>
              </div>
            </div> */}
          </div>

          <div className="contact-bio">
            <p><strong>Quick snapshot:</strong> Systems-minded designer — HTML/CSS/JavaScript (React), product thinking, UI/UX, mentorship, and sports administration experience. Former bricklayer turned designer — I bring discipline, structure, and a hands-on mentality to every project.</p>
            <ul className="contact-tags" aria-hidden="true">
              <li>Product Design</li>
              <li>UI/UX</li>
              <li>Systems Development</li>
              <li>Frontend (React)</li>
              <li>MICT & CATHSSETA Assessor</li>
            </ul>
          </div>
        </section>

        <section className="contact-form-wrap" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="form-heading">Send a quick message</h2>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label className="field">
              <span className="field-label"><FiUser aria-hidden="true" className='contact-icon' /> Your name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Jane Doe"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <div role="alert" className="field-error">{errors.name}</div>}
            </label>

            <label className="field">
              <span className="field-label"><FiMail aria-hidden="true" className='contact-icon' /> Email</span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="jane@example.com"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <div role="alert" className="field-error">{errors.email}</div>}
            </label>

            <label className="field">
              <span className="field-label"><FiMessageSquare aria-hidden="true" className='contact-icon' /> Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows="6"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <div role="alert" className="field-error">{errors.message}</div>}
            </label>

            <div className="form-actions">
              <button type="submit" className="btn" disabled={status === "sending"}>
                {status === "sending" ? "Opening mail client..." : "Send message"}
              </button>

              <div className="form-status" role="status" aria-live="polite">
                {status === "success" && <span className="success">Message action opened — please complete in your mail client.</span>}
                {status === "error" && <span className="error">Something went wrong — try again later.</span>}
              </div>
            </div>
          </form>

          <p className="privacy-note">
            By contacting me you agree to share your name and message. I’ll only use your information to reply — no spam. For professional inquiries only.
          </p>
        </section>
      </div>
    </main>
        <Footer />
   </>
    )
}
export default Contact