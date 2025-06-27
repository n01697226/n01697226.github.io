import React, { useEffect, useState } from "react";
import "./about.css";
import Avatar from "../../assets/sahil-avatar.png";

const About = () => {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/getOverview")
      .then((res) => res.json())
      .then((data) => setOverview(data))
      .catch((err) => console.error(err));
  }, []);

  if (!overview) return <p>Loading...</p>;

  return (
    <section className="container about-container">
      <span className="about-title">Hi &#128075; I'm {overview.name}</span>

      <div className="bio">
        <img src={Avatar} alt="Sahil avatar" />
        <div className="content">
          <h2>{overview.title}</h2>

          {overview.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
