import React, { useEffect, useState } from "react";
import "./experience.css";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getExperience")
      .then((res) => res.json())
      .then((data) => setExperience(data))
      .catch((err) => console.error(err));
  }, []);

  if (!experience) return <p>Loading...</p>;

  return (
    <section className="container experience-container">
      <h2>Academic Experience</h2>
      <p>
        During my academic journey, I have had the privilege of contributing to
        various projects and share my knowledge with my peers, showcasing my
        skills and fostering collaboration.
      </p>

      <div className="experience-grid">
        {experience.map((exp, index) => (
          <div key={index} className="experience">
            <h3>{exp.title}</h3>
            <h4>{exp.description}</h4>
            <ul>
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
