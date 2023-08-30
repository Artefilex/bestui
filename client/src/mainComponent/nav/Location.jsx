import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "../main/Home"
import DocMain from "../../itemComponent/Docs/DocMain";
function Location() {
  return <Routes>
   <Route path="/" exact Component={Home} />
   <Route path="/docs" exact Component={DocMain} />
  </Routes>
}

export default Location;
