import "./Internship.css";
import { motion } from "framer-motion";

function Internship() {
  return (
    <section className="internship" id="internship">
      <motion.div
        className="internship-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Internship</h2>
        <p>
          I completed my <span className="highlight">Full‑Stack Development Internship</span> 
          at <strong>VStand4u Solutions</strong>, where I worked on building 
          scalable web applications and integrating AI‑powered features.
        </p>

        <div className="internship-details">
          <h3>Key Contributions</h3>
          <ul>
            <li>Developed RESTful APIs using Spring Boot and MySQL.</li>
            <li>Implemented JWT authentication and role‑based access control.</li>
            <li>Collaborated with a team to design and deploy full‑stack projects.</li>
            <li>Integrated AI features to enhance user experience.</li>
            <li>Improved application performance through optimized queries.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Internship;
