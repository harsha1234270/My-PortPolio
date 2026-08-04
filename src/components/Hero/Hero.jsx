import "./Hero.css";
import profile from "../../assets/images/mee.jpeg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <motion.h3
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Keshava Murthy H N
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Java Backend Developer
        </motion.h2>

        <p>
          Passionate Java Backend Developer with hands-on experience in
          Spring Boot, REST APIs, MySQL, React and full-stack application
          development. I enjoy building scalable web applications and
          solving real-world problems through clean, maintainable code.
        </p>

        <div className="hero-buttons">

          <a href="https://drive.google.com/file/d/1k44wmTNQRqJ57xFnkmMMqspyxze56HXG/view?usp=drivesdk">
            <FaDownload />
            Resume
          </a>

          <a
            href="https://github.com/harsha1234270/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/keshavhn/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: .5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Profile" />
      </motion.div>

    </section>
  );
}

export default Hero;
