import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "../main/Home"
import DocMain from "../../itemComponent/Docs/DocMain";
import Buttons from "../../itemComponent/Buttons/Buttons"
function Location() {
  return <Routes>
   <Route path="/" exact Component={Home} />
   <Route path="/docs" exact Component={DocMain}/>
   <Route path="/docs/buttons" exact Component={Buttons}/>
  </Routes>
}

export default Location;
