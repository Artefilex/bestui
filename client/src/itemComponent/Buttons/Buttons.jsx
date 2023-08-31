import React, { useState } from "react";
import "./copy.css"
import Copy from "./Copy";
function Buttons() {
   
    const btn1 = {
        css: "button{\n color : wheat;\n background: black; \n} " ,
        react: `
        <button classname = "ejs" > click </button>
          ` 
    }  
  return <div className="Button-container">
    <div className="item-container ">
    <div className="item">
       <Copy cssCode={btn1} cssClass={"ejs"} ></Copy>
    </div>
    <div className="item">
       <Copy cssCode={btn1} cssClass={"ejs"} ></Copy>
    </div>
    <div className="item">
       <Copy cssCode={btn1} cssClass={"ejs"} ></Copy>
    </div>
    <div className="item">
       <Copy cssCode={btn1} cssClass={"ejs"} ></Copy>
    </div>
    </div>
  </div>;
}

export default Buttons;
