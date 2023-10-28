import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default App;
