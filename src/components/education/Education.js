import React, { useEffect, useState } from "react";
import "./education.css";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getEducation")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((err) => console.error(err));
  }, []);

  if (!education) return <p>Loading...</p>;

  return (
    <section className="container education-container">
      <h2>A Deep Dive into My Humber Journey</h2>
      <p>
        I am taking a comprehensive program that focuses on software
        development, database management, and web application design. Below are
        the details of each semester:
      </p>

      <div className="courses-grid">
        {education.map((sem, index) => (
          <div key={index} className="semester">
            <h3>{sem.semester}</h3>
            <ul>
              {sem.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
