import React from "react";
import "./writings.css";

const Writings = () => {
  return (
    <section className="container writings-container">
      <span className="writings-title">Tech Writings</span>

      <div className="writings-grid">
        <div className="writing">
          <h2>Demystifying React: Understanding the Core Concepts</h2>
          <p>
            An in-depth exploration of React's fundamental principles,
            components, and lifecycle.
          </p>
        </div>

        <div className="writing">
          <h2>A Beginner's Guide to RESTful APIs</h2>
          <p>
            Learn the basics of building and consuming RESTful APIs for modern
            web development.
          </p>
        </div>

        <div className="writing">
          <h2>CSS Tricks to Enhance Your Web Design</h2>
          <p>
            Discover tips and techniques to create visually appealing and
            responsive designs using CSS.
          </p>
        </div>

        <div className="writing">
          <h2>Optimizing JavaScript Code for Better Performance</h2>
          <p>
            Best practices and strategies to improve the performance of your
            JavaScript applications.
          </p>
        </div>

        <div className="writing">
          <h2>Version Control Essentials: Getting Started with Git</h2>
          <p>
            An introductory guide to using Git for version control and
            collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Writings;
