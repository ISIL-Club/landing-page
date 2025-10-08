import { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router";

const navLinks = [
  {
    id: "about",
    label: "¿Qué hacemos?",
    to: "#about",
  },
  {
    id: "activities",
    label: "Actividades",
    to: "#activities",
  },
  {
    id: "calculate-promedio",
    label: "Calculadora de promedios",
    to: "#calculate-promedio",
  },
  {
    id: "events",
    label: "Eventos",
    to: "#events",
  },
  {
    id: "resources",
    label: "Recursos para programadores",
    to: "#resources",
  },
  {
    id: "credits",
    label: "Créditos",
    to: "#credits",
  },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const navigateToSection = (sectionId: string) => {
    if (sectionId == "calculate-promedio") {
      navigate("/calculadora");
      return;
    }

    setOpen(false);
    if (sectionId === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        setActiveSection(sectionId);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={scrollToTop} style={{ cursor: "pointer" }}>
            <img src="icon/logo-isil.jpg" alt="ISIL" />
          </div>

          <nav className={`navbar-links ${open ? "active" : ""}`}>
            {navLinks.map(({ label, id }) => (
              <li onClick={() => navigateToSection(id)} key={id}>
                <a className={activeSection === id ? "active-link" : ""}>{label}</a>
              </li>
            ))}
          </nav>

          <button className="navbar-toggle" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
};
