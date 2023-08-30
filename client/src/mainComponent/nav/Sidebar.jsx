import React, { useCallback, useEffect, useState } from "react";
import "../../assest/css/sidebar.css"
import { Link } from "react-router-dom"
import logo from "../../assest/img/logo.png"
import {GrHomeRounded} from "react-icons/gr"
import {AiOutlineMenu} from "react-icons/ai"
function Sidebar() {
  const [show ,setShow] = useState(false)
  const [mobile,setMobile] = useState(window.innerWidth <500)
  const handleClick = useCallback(() =>{
    setShow(!show)
  },[show])

  useEffect(() => {
    const handleResize = () => {
      const newMobile = window.innerWidth < 500;
      setMobile(newMobile);
      setShow(false)
      if (!newMobile) {
        setShow(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div className="Sidebar flex" >
    <div className="sidebar-logo">
        <Link to="/">  
           <img src={logo} alt="logo" />
        </Link>
    </div> 
   {mobile && 
     <button className="menu-button" onClick={handleClick}> <AiOutlineMenu/> </button>
    }
     {(show || !mobile) && (
        <nav className="flex sidebar-nav"> 
        <Link to="/" >  
          <GrHomeRounded className="navbar-icon"/>
         </Link>
         <Link to="/buttons" >  
           <span>Buttons</span>
         </Link>
         <Link to="/" >  
             <span>Forms</span> 
         </Link>
         <Link to="/" >  
             <span>Cards</span> 
         </Link>
         <Link to="/" >  
             <span>animation</span> 
         </Link>
         <Link to="/" >  
             <span>Css</span> 
         </Link>
        </nav>
      )}
   
   
  </div>;
}

export default Sidebar;
