
import { motion } from "framer-motion";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assests/WhatsApp Image 2025-05-16 at 14.00.56_10f3a4cf.jpg";
import myCV from "../assests/my resume .pdf";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "Software Tester",
  "UI/UX Enthusiast",
];


const Orb = ({ style }) => (
  <div
    style={{
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(80px)",
      pointerEvents: "none",
      ...style,
    }}
  />
);

export default function Home() {
  return (
    <div
      className="gradient-bg"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      
      <Orb
        style={{
          width: 500,
          height: 500,
          background: "rgba(59,130,246,0.12)",
          top: "-100px",
          left: "-100px",
        }}
      />
      <Orb
        style={{
          width: 400,
          height: 400,
          background: "rgba(6,182,212,0.08)",
          bottom: "0",
          right: "-80px",
        }}
      />

      <Container style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <Row className="align-items-center justify-content-between w-100 py-5">
          
          <Col md={6} className="mb-5 mb-md-0">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-badge">👋 Welcome to my portfolio</span>
            </motion.div>

            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#f1f5f9",
                marginBottom: "1rem",
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Abdulrhman
              </span>
            </motion.h1>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 600,
                color: "#94a3b8",
                marginBottom: "1.5rem",
                minHeight: "2rem",
              }}
            >
              <span style={{ color: "#3b82f6" }}>{">"}</span>{" "}
              <Typewriter
                words={roles}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </motion.div>

            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                color: "#64748b",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: 460,
                marginBottom: "2.5rem",
              }}
            >
              I build responsive, interactive web applications with a focus on
              clean code and great user experiences. Passionate about React and
              software quality.
            </motion.p>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Button
                className="btn-glow"
                href={myCV}
                download="Abdulrhman_Husseini_CV.pdf"
                style={{ padding: "12px 28px", fontSize: "0.9rem" }}
              >
                Download CV 📄
              </Button>
              <Button
                as="a"
                href="#contact"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#f1f5f9",
                  borderRadius: 10,
                  padding: "12px 28px",
                  fontSize: "0.9rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "#f1f5f9";
                }}
              >
                Get In Touch ✉️
              </Button>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {[
                { n: "3+", label: "Projects" },
                { n: "2+", label: "Years Learning" },
                { n: "ISTQB", label: "Certified" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      color: "#3b82f6",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          
          <Col md={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative", display: "inline-block" }}
            >
             
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #06b6d4, transparent, #3b82f6)",
                  zIndex: 0,
                }}
              />
              
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  border: "2px solid rgba(59,130,246,0.3)",
                  zIndex: 0,
                }}
              />
              <Image
                src={profilePic}
                roundedCircle
                style={{
                  width: 280,
                  height: 280,
                  objectFit: "cover",
                  border: "4px solid var(--bg)",
                  position: "relative",
                  zIndex: 1,
                  filter: "brightness(1.05)",
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}