import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section className="container education-container">
      <h2>A Deep Dive into My Humber Journey</h2>
      <p>
        I am taking a comprehensive program that focuses on software
        development, database management, and web application design. Below are
        the details of each semester:
      </p>

      <div className="courses-grid">
        <div className="semester">
          <h3>Semester 01</h3>
          <ul>
            <li>Database Concepts and Design</li>
            <li>Fundamentals of Numeric Computing</li>
            <li>Algorithms and Problem Solving</li>
            <li>Operating Systems</li>
            <li>Web Programming and Design</li>
            <li>Technical Reading and Writing Skills</li>
          </ul>
        </div>

        <div className="semester">
          <h3>Semester 02</h3>
          <ul>
            <li>Database Programming</li>
            <li>Statistical Data Analysis</li>
            <li>Object-Oriented Programming</li>
            <li>Advanced Front-End Programming</li>
            <li>Technical Workplace Writing Skills</li>
            <li>An Introduction to Arts and Sciences</li>
          </ul>
        </div>

        <div className="semester">
          <h3>Semester 03</h3>
          <ul>
            <li>Systems Design</li>
            <li>Data Structures and Algorithms</li>
            <li>Modern Web Technologies</li>
            <li>Cross-Platform Mobile Application Development</li>
            <li>High-Level Programming Languages</li>
            <li>The World Religion</li>
          </ul>
        </div>

        <div className="semester">
          <h3>Semester 04</h3>
          <ul>
            <li>Application Testing</li>
            <li>Principles of Project Management</li>
            <li>Network Programming</li>
            <li>Advanced Database Programming</li>
            <li>Web Application Development</li>
            <li>Intro to Psychology</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
