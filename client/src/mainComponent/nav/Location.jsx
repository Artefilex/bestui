import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "../main/Home"
import Buttons from "../../itemComponent/Buttons/Copy"
function Location() {
  return <Routes>
   <Route path="/" exact Component={Home} />
   <Route path="/buttons" exact Component={Buttons} />
  </Routes>
}

export default Location;
