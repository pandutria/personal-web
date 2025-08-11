import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Achievements from "../pages/Achievements";
import Experiences from "../pages/Experiences";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/experiences" element={<Experiences />} />
    </Routes>
  );
}

export default Router;
