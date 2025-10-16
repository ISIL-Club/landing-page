import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Badge, FileText, Wrench } from "lucide-react";
import "./RecursosPage.css";

export const RecursosPage: React.FC = () => {
  const navigate = useNavigate();

  const recursos = [
    {
      icon: <GraduationCap size={50} className="icon-white" />,
      title: "Cursos gratuitos",
      route: "",
    },
    {
      icon: <Badge size={50} className="icon-white" />,
      title: "Certificaciones",
      route: "",
    },
    {
      icon: <FileText size={50} className="icon-white" />,
      title: "Artículos",
      route: "",
    },
    {
      icon: <Wrench size={50} className="icon-white" />,
      title: "Herramientas",
      route: "",
    },
  ];

  return (
    <div className="recursos-container">
      <h1 className="recursos-title">
        RECURSOS PARA PROGRAMADORES<span className="slash">/</span>
      </h1>

      <p className="recursos-description">
        Ofrecemos acceso y recomendaciones a cursos gratuitos, certificaciones,
        recursos útiles, artículos y herramientas para ayudarte a crecer como
        desarrollador.
      </p>

      <div className="recursos-grid">
        {recursos.map((item, index) => (
          <div
            key={index}
            className="recurso-card"
            onClick={() => navigate(item.route)}
          >
            <div className="recurso-icon">{item.icon}</div>
            <p className="recurso-title">{item.title}</p>
          </div>
        ))}
      </div>

      <button className="recursos-button">Explorar recursos</button>
    </div>
  );
};
