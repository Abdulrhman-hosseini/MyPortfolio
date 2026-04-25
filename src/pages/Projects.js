
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Online Library",
    description:
      "A React-based online library with search functionality, user login, and a cart system for managing books.",
    link: "https://abdulrhman-hosseini.github.io/Online-Library/",
    tags: ["React", "JavaScript", "Bootstrap"],
    emoji: "📚",
  },
  {
    number: "02",
    title: "Education Platform",
    description:
      "Responsive educational website built with HTML, CSS, and JavaScript featuring a clean, modern design.",
    link: "https://abdulrhman-hosseini.github.io/Education/",
    tags: ["HTML5", "CSS3", "JavaScript"],
    emoji: "🎓",
  },
  {
    number: "03",
    title: "Coffee Website",
    description:
      "Responsive coffee shop website with a warm aesthetic, menu showcase, and smooth animations.",
    link: "https://abdulrhman-hosseini.github.io/Website_Coffee/",
    tags: ["HTML5", "CSS3", "JavaScript"],
    emoji: "☕",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <div
      className="gradient-bg"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <Container className="py-5">
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-badge">03 — Portfolio</span>
          <h2 className="main-title mt-2">My Projects</h2>
          <div className="underline" />
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Row className="g-4 justify-content-center">
            {projects.map((project, index) => (
              <Col md={4} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  style={{ height: "100%" }}
                >
                  <div
                    className="project-card h-100"
                    style={{ padding: "2rem", display: "flex", flexDirection: "column" }}
                  >
                    {/* Top row */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: "2.5rem",
                        }}
                      >
                        {project.emoji}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 800,
                          fontSize: "0.75rem",
                          color: "rgba(59,130,246,0.5)",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {project.number}
                      </span>
                    </div>

                  
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        color: "#f1f5f9",
                        marginBottom: "0.75rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {project.title}
                    </h3>

                    
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "0.85rem",
                        lineHeight: 1.8,
                        flex: 1,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {project.description}
                    </p>

                    
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: "0.68rem",
                            padding: "3px 10px",
                            background: "rgba(59,130,246,0.1)",
                            color: "#3b82f6",
                            border: "1px solid rgba(59,130,246,0.2)",
                            borderRadius: "100px",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow"
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        textDecoration: "none",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        padding: "10px 20px",
                        borderRadius: 10,
                      }}
                    >
                      View Project <span>→</span>
                    </motion.a>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}