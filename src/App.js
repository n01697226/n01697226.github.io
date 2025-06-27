import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js";
import About from "./components/about/about.js";
import Experience from "./components/experience/Experience.js";
import Education from "./components/education/Education.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
    </>
  );
};

export default App;
