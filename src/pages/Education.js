
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const educationData = [
  {
    icon: "🎓",
    title: "Bachelor's in Computer Science",
    institution: "Cairo University",
    year: "2020 – 2024",
    description:
      "Studied CS fundamentals, web development, algorithms, and software testing techniques.",
    color: "#3b82f6",
  },
  {
    icon: "⚛️",
    title: "Frontend Development",
    institution: "Udemy",
    year: "2023",
    description:
      "Mastered React.js, Bootstrap, Tailwind CSS, and modern JavaScript best practices.",
    color: "#06b6d4",
  },
  {
    icon: "🧪",
    title: "ISTQB Foundation",
    institution: "Certified",
    year: "2024",
    description:
      "Gained solid knowledge of manual testing, test case design, bug reporting, and Selenium basics.",
    color: "#8b5cf6",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  return (
    <div className="gradient-bg" style={{ minHeight: "100vh", paddingTop: "80px" }}>
      <Container className="py-5">

    
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-badge">Education</span>
          <h2 className="section-title mt-2">My Journey</h2>
          <div className="accent-line" />
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Row className="g-4 justify-content-center">
            {educationData.map((edu, idx) => (
              <Col xs={12} md={6} lg={4} key={idx}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{ height: "100%" }}
                >
                  <div
                    className="glass-card shadow-card h-100"
                    style={{
                      padding: "2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      borderTop: `2px solid ${edu.color}`,
                    }}
                  >
                   
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      transition={{ duration: 0.3 }}
                      style={{ fontSize: "2.5rem", display: "inline-block" }}
                    >
                      {edu.icon}
                    </motion.div>

                    
                    <span
                      style={{
                        fontSize: "0.68rem",
                        padding: "3px 10px",
                        background: `${edu.color}18`,
                        color: edu.color,
                        border: `1px solid ${edu.color}35`,
                        borderRadius: "100px",
                        letterSpacing: "0.06em",
                        alignSelf: "flex-start",
                      }}
                    >
                      {edu.year}
                    </span>

                    
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "#f1f5f9",
                        letterSpacing: "-0.02em",
                        margin: 0,
                      }}
                    >
                      {edu.title}
                    </h3>

                    
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: edu.color,
                      }}
                    >
                      {edu.institution}
                    </div>

                    
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "0.82rem",
                        lineHeight: 1.8,
                        flex: 1,
                        margin: 0,
                      }}
                    >
                      {edu.description}
                    </p>
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