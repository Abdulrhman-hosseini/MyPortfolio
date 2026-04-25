
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../assests/WhatsApp Image 2025-05-16 at 14.00.56_10f3a4cf.jpg";

const highlights = [
  { icon: "⚛️", title: "Frontend Dev", desc: "React, Bootstrap, Tailwind CSS" },
  { icon: "🧪", title: "Software Tester", desc: "ISTQB, Manual Testing, Selenium" },
  { icon: "🎯", title: "Goal", desc: "Impactful, user-first digital products" },
];

export default function About() {
  return (
    <div className="gradient-bg" style={{ minHeight: "100vh", paddingTop: "80px" }}>
      <Container style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <Row className="align-items-center justify-content-center w-100 py-5 gap-5 gap-md-0">

          
          <Col md={5} className="d-flex justify-content-center mb-5 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative" }}
            >
             
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: 320,
                  height: 320,
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.1))",
                  borderRadius: "60% 40% 70% 30% / 40% 60% 40% 60%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  zIndex: 0,
                }}
              />
              <img
                src={myPhoto}
                alt="Abdulrhman Husseini"
                style={{
                  width: 280,
                  height: 280,
                  objectFit: "cover",
                  borderRadius: "30px",
                  border: "3px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.2)",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                animate={{ y: [0, -6, 0] }}
                
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  background: "rgba(3,7,18,0.9)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: 12,
                  padding: "10px 16px",
                  zIndex: 2,
                  backdropFilter: "blur(16px)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.8rem",
                  color: "#f1f5f9",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "#4ade80" }}>●</span> Available for hire
              </motion.div>
            </motion.div>
          </Col>

          
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-badge">01 — About me</span>
              <h2 className="section-title mb-4">
                Building the web,
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  one pixel at a time.
                </span>
              </h2>

              <p style={{ color: "#64748b", lineHeight: 1.9, marginBottom: "1.2rem" }}>
                I'm <strong style={{ color: "#f1f5f9" }}>Abdulrhman Husseini</strong> — a
                passionate Frontend Developer and Software Tester based in Egypt. I
                specialise in crafting responsive, modern, and user-friendly web
                applications.
              </p>
              <p style={{ color: "#64748b", lineHeight: 1.9, marginBottom: "2.5rem" }}>
                Skilled in <strong style={{ color: "#3b82f6" }}>React</strong>,{" "}
                <strong style={{ color: "#3b82f6" }}>Bootstrap</strong>, and{" "}
                <strong style={{ color: "#3b82f6" }}>Tailwind CSS</strong>, I write
                clean, efficient, well-tested code and aim to create digital experiences
                that users genuinely love.
              </p>

              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                    whileHover={{ x: 6 }}
                    className="glass-card"
                    style={{
                      padding: "14px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <span style={{ fontSize: "1.4rem" }}>{h.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#f1f5f9" }}>
                        {h.title}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "#64748b" }}>{h.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}