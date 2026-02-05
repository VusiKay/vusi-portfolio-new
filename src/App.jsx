import { Routes, Route } from "react-router-dom";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import ScrollToTop from "./Components/Layout/ScrollToTop";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import LawLensPage from "./routes/LawLensPage";
import OpenWayPage from "./routes/OpenWayPage";
import FarmGuardPage from "./routes/FarmGuardPage";

function App() {
  return (
    <>
      <Header />           {/* Header with active links & mobile menu */}
      <ScrollToTop />      {/* Automatically scroll to top on route change */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/lawlens" element={<LawLensPage />} />
        <Route path="/projects/openway" element={<OpenWayPage />} />
        <Route path="/projects/farmguard" element={<FarmGuardPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />           {/* Footer visible on all pages */}
    </>
  );
}

export default App;
