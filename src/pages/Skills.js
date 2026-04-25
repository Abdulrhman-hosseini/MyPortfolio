
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

import reactLogo from "../assests/React-icon.svg";
import jsLogo from "../assests/JavaScript-logo.png";
import htmlLogo from "../assests/HTML5_logo_and_wordmark.svg";
import bootstrapLogo from "../assests/Bootstrap_logo.svg";
import tailwindLogo from "../assests/Tailwind_CSS_Logo.svg";
import manualLogo from "../assests/1048960.png";
import bugLogo from "../assests/1159633.png";
import seleniumLogo from "../assests/Selenium_Logo.png";
import istqbLogo from "../assests/63_human_verify.jpg";

const frontendSkills = [
  { name: "React.js", logo: reactLogo },
  { name: "JavaScript (ES6+)", logo: jsLogo },
  { name: "HTML5 / CSS3", logo: htmlLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
];

const testingSkills = [
  { name: "Manual Testing", logo: manualLogo },
  { name: "Test Cases & Bug Reporting", logo: bugLogo },
  { name: "Selenium (Basics)", logo: seleniumLogo },
  { name: "ISTQB Foundation", logo: istqbLogo },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SkillCard({ skill }) {
  return (
    <motion.div variants={cardVariants} whileHover={{ scale: 1.06, y: -6 }}>
      <Card
        className="glass-card p-3 text-center h-100"
        style={{ border: "none", cursor: "pointer", minHeight: 150 }}
      >
        <motion.img
          src={skill.logo}
          alt={skill.name}
          className="skill-logo mx-auto d-block"
          whileHover={{ rotate: -8, scale: 1.2 }}
          transition={{ duration: 0.3 }}
          style={{ width: 64, height: 64, marginBottom: 12 }}
        />
        <Card.Title
          style={{
            color: "#f1f5f9",
            fontSize: "0.82rem",
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {skill.name}
        </Card.Title>
      </Card>
    </motion.div>
  );
}

function SectionHeading({ emoji, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", marginBottom: "2rem" }}
    >
      <span className="section-badge">{emoji} {label}</span>
    </motion.div>
  );
}

export default function Skills() {
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
          <span className="section-badge">02 — Expertise</span>
          <h2 className="section-title mt-2">My Skills</h2>
          <div className="accent-line" />
        </motion.div>

        
        <SectionHeading emoji="🎨" label="Frontend Development" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Row className="g-4 justify-content-center mb-5">
            {frontendSkills.map((skill, idx) => (
              <Col key={idx} xs={6} sm={4} md={3} lg={2}>
                <SkillCard skill={skill} />
              </Col>
            ))}
          </Row>
        </motion.div>

        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)",
            margin: "3rem 0",
          }}
        />

        
        <SectionHeading emoji="🧪" label="Software Testing" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <Row className="g-4 justify-content-center">
            {testingSkills.map((skill, idx) => (
              <Col key={idx} xs={6} sm={4} md={3} lg={2}>
                <SkillCard skill={skill} />
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}