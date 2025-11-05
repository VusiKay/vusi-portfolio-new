
import { FiPenTool, FiPackage, FiSettings, FiMonitor, FiAward } from "react-icons/fi";


function SkillsSection() {
    const skills = [
        {
          icon: <FiPenTool />,
          title: "UI/UX Design",
          desc: "Designing interfaces and interactions that put users first.",
        },
        {
          icon: <FiPackage />,
          title: "Product Design",
          desc: "From concept to prototype — translating ideas into usable products.",
        },
        {
          icon: <FiSettings />,
          title: "Systems Development Thinking",
          desc: "Integrating design logic with technical feasibility.",
        },
        {
          icon: <FiMonitor />,
          title: "Frontend Understanding",
          desc: "Bridging design and code for smooth handoffs and better implementation.",
        },
        {
          icon: <FiAward />,
          title: "Mentorship & Assessment",
          desc: "Certified MICT & CATHSSETA Assessor guiding upcoming designers and developers.",
        },
      ];
  return (
    <div>
   <section className="skills-section">
      <div className="skills-grid">
        {skills.map((item) => (
          <div className="skill-card" key={item.title}>
            <div className="icon">{item.icon}</div>
            <h3 className="title">{item.title}</h3>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default SkillsSection
