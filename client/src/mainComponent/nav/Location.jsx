import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "../main/Home"
import DocMain from "../../itemComponent/Docs/DocMain";
import Buttons from "../../itemComponent/Buttons/Buttons"
import Form from "../../itemComponent/Forms/Form";
import NavStyle from "../../itemComponent/Nav/NavStyle";
function Location() {
  return <Routes>
   <Route path="/" exact Component={Home} />
   <Route path="/docs"  Component={DocMain}/>
   <Route path="/docs/buttons" Component={Buttons}/>
   <Route path="/docs/forms" Component={Form}/>
   <Route path="/docs/navs" Component={NavStyle}/>
  </Routes>
}

export default Location;
