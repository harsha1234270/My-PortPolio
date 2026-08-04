import "./Skills.css";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Java & Spring Boot",
    "RESTful APIs",
    "MySQL & Database Design",
    "React & Frontend Development",
    "Problem Solving (DSA, Leetcode)",
    "Git & Version Control",
    
    
  ];

  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Skills</h2>
        <p>
          Here are the core technologies and tools I work with to build scalable,
          efficient, and maintainable applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
