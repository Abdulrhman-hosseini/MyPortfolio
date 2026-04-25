
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <Navbar
        expand="lg"
        className="py-3"
        style={{
          background: scrolled
            ? "rgba(3, 7, 18, 0.92)"
            : "rgba(3, 7, 18, 0.5)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <Container>
          
          <Navbar.Brand as={Link} to="/">
            <motion.span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "1.2rem",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.03em",
              }}
              whileHover={{ scale: 1.05 }}
            >
              {"<AH />"}
            </motion.span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-nav"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          />

          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto gap-1">
              {links.map((link, i) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <Nav.Link
                      as={Link}
                      to={link.to}
                      style={{
                        color: isActive ? "#3b82f6" : "rgba(255,255,255,0.75)",
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        letterSpacing: "0.03em",
                        padding: "6px 14px",
                        borderRadius: "8px",
                        background: isActive
                          ? "rgba(59,130,246,0.12)"
                          : "transparent",
                        transition: "all 0.2s ease",
                        position: "relative",
                      }}
                      className="nav-link-custom"
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          style={{
                            position: "absolute",
                            bottom: -2,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#3b82f6",
                          }}
                        />
                      )}
                    </Nav.Link>
                  </motion.div>
                );
              })}
            </Nav>

          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: "0.72rem",
                color: "#4ade80",
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.2)",
                borderRadius: "100px",
                padding: "4px 12px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#4ade80",
                  animation: "pulse-dot 2s infinite",
                  display: "inline-block",
                }}
              />
              Open to work
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        .nav-link-custom:hover {
          color: #fff !important;
          background: rgba(255,255,255,0.06) !important;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>
    </motion.div>
  );
}