import heroImg from '/src/assets/Desktop - 1.png';
import cardsImg from '/src/assets/Cards.png';
/* import RideLocalImg from '/src/assets/Splash Screen (Bezel).png';
import GoldenAmpleImg from '/src/assets/DesktopGA.png';
import EdgeconImg from '/src/assets/Hero DESKTOP REAL Edge.png' */;
import SkillsSection from '/src/Components/Layout/SkillsSection.jsx'
import Header from '/src/Components/Layout/Header.jsx'
import Footer from '/src/Components/Layout/Footer.jsx'
import ProjectsGrid from '../Components/ProjectsGrid.jsx';

function Body(){

    const style = {
        /* color: 'aqua', */
        marginLeft: '190px',
        fontSize: "1.5rem",
        fontWeight: 'normal',
        textDecoration:'underline'
    };
    
    return(


    <>
    <Header />
    <section className="hero">
      <img src={heroImg} alt="Hero visual" className="hero-img" />
      {/* <div className="hero-content">
        <h1>UI UX Designer</h1>
      </div> */}
    </section>

    <div className="main-content">
        
           <p className='intro-txt'>
           <span className='name-txt'>Hi, I’m Katlego Mthombeni</span> — 
           a Product & UI/UX Designer with a foundation in <strong>Systems Development</strong> and <strong>Frontend Engineering</strong>.
           I turn ideas into seamless,
           human-centered digital experiences by blending creative design with technical precision.<br/>
           My background in systems thinking allows me to craft products that 
           are not only visually refined but also logically structured and scalable.

           <br/>

           I design with intent — every layout, flow, and interaction is purposeful,
           creating interfaces that feel effortless and intuitive for users.<br/> Beyond design,
           I bring experience in sports administration and serve as an accredited MICT & CATHSSETA Assessor,
           which enriches my approach to leadership, collaboration, and mentorship across teams and disciplines.
           </p>
           <span>
            <img src={cardsImg} alt="card-visual" className='home-card-img' />
           </span>
        
    </div>
    <div className="selected-work-txt">
        <h2>Selected Projects</h2>
        <p>A selection of projects where design, systems thinking, and user experience come together.</p>

        
    </div>
    <ProjectsGrid />

        <div className="selected-work-txt">
        <h2>My Expertise</h2>
        

        <SkillsSection  name = {'Hello'}/>
        <Footer />

    </div>
    
    </>

        

    


 

    );
}
export default Body