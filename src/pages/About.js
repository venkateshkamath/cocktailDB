import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h2 className="section-title">About Us</h2>
      <p>
        This is a cocktailDB project build for better understanding of
        <i> React Router Dom, Context API </i>and other fundamental as well as
        advanced topic. I am Venkatesh Kamath and I like working with React,
        here is my
        <a
          href="https://venkateshkamath.netlify.app/"
          style={{ color: "#01BFAE" }}
        >
          {" "}
          Portfolio
        </a>{" "}
        and the
        <a
          href="https://github.com/venkateshkamath/cocktailDB"
          style={{ color: "red" }}
        >
          {" "}
          Repo
        </a>
        . Feel free to text/connect through{" "}
        <a
          style={{ color: "#0A66C2" }}
          href="https://www.linkedin.com/in/venkateshkamath08/"
        >
          {" "}
          LINKEDIN{" "}
        </a>
      </p>
    </section>
  );
};

export default About;
