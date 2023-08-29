import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "../main/Home"
function Location() {
  return <Routes>
   <Route path="/" exact Component={Home} />
  </Routes>
}

export default Location;
