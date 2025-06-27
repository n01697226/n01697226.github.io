import React from "react";
import "./about.css";
import Avatar from "../../assets/sahil-avatar.png";

const About = () => {
  return (
    <section className="container about-container">
      <span className="about-title">Hi &#128075; I'm Sahil</span>

      <div className="bio">
        <img src={Avatar} alt="Sahil avatar" />
        <div className="content">
          <h2>
            A creative designer & full-stack developer based in Toronto, Ontario
          </h2>

          <p>
            Currently, I am pursuing a Computer Programming course at Humber
            Polytechnic, where I am learning to create innovative and efficient
            digital solutions. Over the semesters, I have completed projects
            spanning front-end development, back-end systems, database design,
            and API development.
          </p>
          <p>
            I am focused on securing a learning opportunity with a dynamic and
            forward-thinking firm where I can apply my expertise, gain
            real-world experience, and grow alongside talented professionals. My
            goal is to contribute meaningfully to impactful projects while
            constantly learning and evolving as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
