import React from "react";
import "../../assest/css/sidebar.css"
import { Link } from "react-router-dom"
import logo from "../../assest/img/logo.png"
function Sidebar() {
  return <div className="Sidebar flex" >
    <div>
        <Link to="/">  
           <img src={logo} alt="logo" />
        </Link>
    </div> 
   <nav> 
   <Link to="/" >  
      <img src={logo} alt="logo" />
    </Link>
   </nav>
  </div>;
}

export default Sidebar;
