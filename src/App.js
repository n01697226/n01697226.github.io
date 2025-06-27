import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js";
import About from "./components/about/about.js";
import Education from "./components/education/Education.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
    </>
  );
};

export default App;
