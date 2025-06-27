import React from "react";
import Icons from "../icons/Icons.js";
import "./home.css";

const Home = () => {
  return (
    <section className="container home-container">
      <div className="intro">
        <h1>Bringing Your Vision to Life</h1>
        <p>
          Crafting digital experiences that leave a mark with stunning visuals
          and seamless functionality
          <br />
          because your vision deserves nothing less &#10024;
        </p>
      </div>

      <div className="intro-links">
        <a href="https://github.com/birmansahil">GitHub</a> /
        <a href="#">LinkedIn</a> /<a href="#">Projects</a>
      </div>

      <Icons />
    </section>
  );
};

export default Home;
