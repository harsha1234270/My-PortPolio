import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Me</h2>
        <p>
          Interested in collaborating or have an opportunity? Feel free to reach out!
        </p>

        <div className="contact-info">
          <a href="mailto:keshavhhnkeshav@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope /> keshavhhnkeshav@gmail.com
          </a>
          <a href="tel:+917975883434">
            <FaPhone /> +91-7975883434
          </a>
          <a href="https://www.linkedin.com/in/keshavhn/" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/harsha1234270" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
