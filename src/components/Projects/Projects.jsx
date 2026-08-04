import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "CareerConnect - Full-Stack Job Portal",
      date: "Jan 2026",
      tech: "Java, Spring Boot, Spring Security, MySQL, REST APIs, JSON, JavaScript, HTML/CSS, Git",
      details: [
        "Architected full MVC application connecting job seekers and recruiters.",
        "Implemented role-based access control (RBAC) with Spring Security.",
        "Designed normalized MySQL schemas and optimized CRUD operations.",
        "Built RESTful APIs consumed by a dynamic JavaScript frontend.",
        "Implemented JWT-style authentication for multi-role users."
      ]
    },
    {
      title: "E-Commerce Platform - Full-Stack",
      date: "Aug 2025",
      tech: "Java, Spring Boot, MySQL, REST APIs, JSON, JavaScript, HTML/CSS",
      details: [
        "Developed end-to-end e-commerce solution with product catalog, cart, and orders.",
        "Designed scalable MySQL schema with referential integrity constraints.",
        "Built Spring Boot REST backend handling authentication and product CRUD.",
        "Implemented structured exception handling for reliability."
      ]
    }
  ];

  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{project.title}</h3>
              <span className="project-date">{project.date}</span>
              <p className="project-tech"><strong>Tech:</strong> {project.tech}</p>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
