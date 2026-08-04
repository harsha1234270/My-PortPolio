import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          I'm <span className="highlight">Keshava Murthy H N</span>, a passionate
          <strong> Java Backend Developer</strong> with hands-on experience in
          building scalable applications using Spring Boot, REST APIs, MySQL,
          and React. I enjoy solving real-world problems through clean,
          maintainable code and continuously learning new technologies.
        </p>

        <p>
          Recently, I’ve worked on projects like a Job Portal and
          an E-Commerce Platform, which strengthened my skills in full-stack
          development and teamwork. My goal is to contribute to impactful
          software solutions while growing as a developer.
        </p>

        <div className="about-skills">
          <h3>Skills</h3>
          <ul>
            <li>Java & Spring Boot</li>
            <li>RESTful APIs</li>
            <li>MySQL & Database Design</li>
            <li>React & Frontend Development</li>
            <li>Problem Solving (DSA, Leetcode)</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
