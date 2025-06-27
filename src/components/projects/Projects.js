import React from "react";
import "./projects.css";
import Project01 from "../../assets/project01.png";
import Project02 from "../../assets/project02.png";

const Projects = () => {
  return (
    <section className="container projects-container">
      <h2>Featured Projects</h2>
      <p>Explore my lastest creations blenging innovation and design</p>

      <div className="projects-grid">
        <img src={Project01} alt="gift shop" />
        <img src={Project02} alt="budget app" />
      </div>
    </section>
  );
};

export default Projects;
