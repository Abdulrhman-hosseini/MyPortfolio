
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  {
    icon: <FaFacebook />,
    label: "Facebook",
    href: "https://www.facebook.com/share/1Au3ipGRpw/",
    color: "#1877F2",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    href: "https://wa.me/201019175169",
    color: "#25D366",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/Abdulrhman-hosseini",
    color: "#e2e8f0",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdo-hosseini/",
    color: "#0A66C2",
  },
  {
    icon: <SiGmail />,
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdohosseini32@gmail.com",
    color: "#EA4335",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  return (
    <div
      className="gradient-bg"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <Container
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 600, width: "100%", padding: "3rem 0" }}>

          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-badge">04 — Get in touch</span>
            <h2
              className="section-title mt-2 mb-0"
              style={{ lineHeight: 1.1 }}
            >
              Let's Work
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Together.
              </span>
            </h2>
            <div className="accent-line mt-3" />
          </motion.div>

          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              color: "#64748b",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "3rem",
            }}
          >
            Feel free to reach out via social media or send me a direct
            message. I'm open to collaborations, projects, and new
            opportunities!
          </motion.p>

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1.2rem",
              marginBottom: "3rem",
            }}
          >
            {socials.map((s, i) => (
              <motion.div key={i} variants={itemVariants}>
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: s.color,
                    borderColor: s.color,
                    y: -8,
                    boxShadow: `0 16px 40px ${s.color}40`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  title={s.label}
                  style={{ fontSize: "1.5rem" }}
                >
                  {s.icon}
                </motion.a>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#64748b",
                    marginTop: 6,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                color: "#64748b",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Or drop me an email directly
            </div>
            <motion.a
              href="mailto:abdohosseini32@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-block",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1rem, 3vw, 1.4rem)",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
                borderBottom: "2px solid rgba(59,130,246,0.3)",
                paddingBottom: 4,
              }}
            >
              abdohosseini32@gmail.com
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}