import React from "react";
import { Link } from "react-router-dom";
function DocNav() {
  return (
    <nav className="flex navbar-down-container"> 
     <Link to="/doc/responsive" >  
       <span>Design</span>
     </Link>
     <Link to="/doc/buttons" >  
         <span>Buttons</span> 
     </Link>
     <Link to="/doc/forms" >  
         <span>Forms</span> 
     </Link>
     <Link to="/doc/card" >  
     <span>Cards</span> 
     </Link>
     
    
    </nav>
  );
}

export default DocNav;
