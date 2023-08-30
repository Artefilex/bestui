import React from "react";
import "../../assest/css/entry.css";
import {LiaSpaceShuttleSolid} from "react-icons/lia"
import { Link } from "react-router-dom";
function Entry() {
  
  return (
    <div className="Entry flex">
      <header className="main-header flex">
        <h1> Welcome to Artefilex UI </h1>
        <h3>Build Fast, Don't Repate Yourself</h3>
      </header>
     
    <Link to="/docs" className="start-btn flex">
       <LiaSpaceShuttleSolid className="icon"/> <span>Get Start</span>
    </Link>
 
    </div>
  );
}

export default Entry;
