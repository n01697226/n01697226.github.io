import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="container footer-container">
      <div className="collaboration">
        <h2>Together, We Can Build Extraordinary Things</h2>
        <p>Let's collaborate to bring your creative ideas to life</p>
        <a href="mailto:n01697226@humber.ca" className="collaboration-link">
          Let's Connect
        </a>
      </div>

      <div className="copyright">
        <p>&copy; Sahil | 2025</p>
      </div>
    </section>
  );
};

export default Footer;
