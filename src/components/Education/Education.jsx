import "./Education.css";
import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      degree: "B.E. in Electronics & Telecommunication Engineering",
      institution: "Dr. Ambedkar Institute of Technology, Bangalore",
      year: "2022 - 2026",
      details: [
        "CGPA: 8.0 / 10",
        "Focused on Java, Spring Boot, REST APIs, MySQL, and full-stack projects.",
        "Active member of Google Developer Programme; Student & Event Coordinator."
      ]
    },
    {
      degree: "Pre-University Course (PUC) - Science",
      institution: "Govt PU College for Boys, Arasikere, Hassan",
      year: "2020 - 2022",
      details: [
        "Subjects: Physics, Chemistry, Mathematics, Biology.",
        "Secured 507/600 marks (First Class).",
        "Medium of Instruction: English."
      ]
    },
    {
      degree: "Secondary School (SSLC)",
      institution: "Siddeshwara High School, Arasikere, Hassan",
      year: "2019 - 2020",
      details: [
        "Scored 562/625 marks (89.92%).",
        "Medium of Instruction: Kannada.",
        "Strong foundation in Mathematics, Science, and Languages."
      ]
    }
  ];

  return (
    <section className="education" id="education">
      <motion.div
        className="education-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Education</h2>
        <div className="education-list">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <span className="edu-year">{edu.year}</span>
              <ul>
                {edu.details.map((detail, i) => (
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

export default Education;
