import cardsImg from '../assets/PortfolioImage.jpg';

import Header from '/src/Components/Layout/Header.jsx'
import Footer from '/src/Components/Layout/Footer.jsx'

function About(){
    return(
        
        <>
        <Header />
        <h1 className='header-txt'>About.</h1>
        <div className="about-container">
            
            <span>
                <img src={cardsImg} alt="my-image" className='my-image' />
               </span>
               
               <p className='introduction-txt'>
                
               <span className='name-txt'> I’m Katlego Vusimuzi Mthombeni</span> — 
               a Product & UI/UX Designer with a foundation in <strong>Systems Development</strong> and <strong>Frontend Engineering</strong>.
               But my path to design wasn’t linear, it was built layer by layer,
                from bricklaying sites to digital systems, from sports fields to design studios.
    
               <br/>
    
               I started my career in systems development,
                learning how to make technology work seamlessly behind the scenes. 
                That foundation gave me a rare advantage: I don’t just design what looks good, i design what works.
                Every product I create is grounded in structure, logic, and technical feasibility.
               </p>
               
            
        </div>

        <div className="my-journey">
            <p>My Journey.</p>
            
        </div>
        
        <p className='journey-txt'>Before design, I worked in bricklaying, where precision, patience, and structure were non-negotiable. 
                Oddly enough, that experience mirrors my approach to design today, you can’t rush good craftsmanship,
                 whether you’re laying bricks or building interfaces.

My passion for sports and fitness has always shaped my mindset — discipline,
 teamwork, and consistency are the principles that guide how I design and collaborate.
  My background in sports administration taught me how to lead with clarity and manage
   projects with a balance of structure and empathy.

Now, as a MICT & CATHSSETA Accredited Assessor, 
I mentor and evaluate upcoming designers and developers, 
helping them grow not only in skill but in mindset — 
because good design thinking
 begins with self-discipline and curiosity.
 
 
</p>

<div className="my-journey">
            <p>What i do.</p>
            
        </div>
        <p className='journey-txt'><strong>Product & UX Design:</strong> I turn user problems into elegant, validated solutions — 
        from research and wireframes to prototypes and usability testing.<br/>

<strong>UI Design:</strong> Crafting interfaces that are not only clean and accessible but also emotionally engaging.<br/>

<strong>Technical Foundation:</strong> Fluent in HTML, CSS, JavaScript, and familiar with frameworks like React — allowing me to bridge the gap between design and implementation.<br/>

<strong>Systems Development Thinking: </strong> Applying logical frameworks from my programming background to design scalable, maintainable digital experiences.<br/>

<strong>Mentorship & Assessment:</strong> Helping others grow as an accredited MICT & CATHSSETA Assessor, fostering learning in design and development.<br/>

<strong>Leadership & Sports Administration:</strong> Bringing structure, focus, and coordination skills from years of organizing teams, events, and athletic programs.
 
</p>
<div className="my-journey">
            <p>Beyond the Screen.</p>
           
        </div>
        <p className='beyond-the-screen'>When I’m not designing, I’m probably training, running, or exploring new places. I believe travel expands creativity — every city, culture, and experience teaches you something new about people and how they interact with the world.

Fitness keeps my mind sharp and focused; travel keeps it open and inspired. Together, they remind me that <strong>design is about movement and perspective</strong> — always evolving, always adapting.</p>
            


<div className="my-journey">
            <p>My Design Philosophy.</p>
           
        </div>
        <p className='beyond-the-screen'>I believe great design happens where <strong>creativity meets systems thinking</strong> — where empathy and structure coexist.<br/>
<strong>My approach is simple:</strong>
<br/>
<ul>
    <li> Understand the problem deeply.</li>
    <li>Design intentionally.</li>
    <li>Build with purpose.</li>
</ul>

<i>I create products that feel effortless to use because they’re built with care, logic, and a deep respect for the human experience behind every interaction.</i></p>
            <Footer/>
        </>
    )
}
export default About