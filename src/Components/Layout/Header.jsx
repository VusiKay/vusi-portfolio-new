import { Link } from "react-router-dom";

function Header(){

    const style = {
        
       color: 'wheat'
    };

    return(


        <> 
         
        <div className="header-container">
           <Link className="logo-link" to="/home"><p className="logo">Katlego <span style={style}>VM.</span></p></Link>
           
           
                <div className="links-container">
                      <Link className="menu-links" to="/home">Home</Link>
             <Link className="menu-links" to="/about">About</Link>
             <Link className="menu-links" to="/projects">Projects</Link>
             <Link className="menu-links" to="/contact">Contact</Link>
                </div>
            
           
             
            

            
        </div>
        </>

       
    )
}
export default Header