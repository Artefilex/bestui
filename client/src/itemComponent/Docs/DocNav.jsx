import React from "react";
import { Link } from "react-router-dom";
function DocNav() {
  return (
    <nav className="flex navbar-down-container"> 
     <Link to="/docs" >  
       <span>Overview</span>
     </Link>
     <Link to="/docs/buttons" >  
         <span>Buttons</span> 
     </Link>
     <Link to="/docs/forms" >  
         <span>Forms</span> 
     </Link>
     <Link to="/docs/navs" >  
     <span>Navbar</span> 
     </Link>
     
    
    </nav>
  );
}

export default DocNav;
