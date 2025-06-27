import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js";
import Projects from "./components/projects/Projects.js";
import About from "./components/about/about.js";
import Experience from "./components/experience/Experience.js";
import Education from "./components/education/Education.js";
import Footer from "./components/footer/Footer.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Experience />
              <Education />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
