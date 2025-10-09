import React from "react";
import styles from "./creditos.module.css";

const colaboradores = [
  {
    nombre: "Rafael Acalá",
    ocupacion: "UX/UI DESIGNER",
    imagen: "/imagenes/RafaelAcala.jpg",
    grupo: 1,
  },
  {
    nombre: "Juan Yllanes",
    ocupacion: "PROGRAMMER",
    imagen: "/imagenes/JuanYllanes.png",
    grupo: 1,
  },
  {
    nombre: "Jair Castañeda",
    ocupacion: "PROGRAMMER",
    imagen: "/imagenes/JairCastañeda.jpg",
    grupo: 1,
  },
  {
    nombre: "Andy Chung",
    ocupacion: "PROGRAMMER",
    imagen: "/imagenes/AndyChung.jpeg",
    grupo: 2,
  },
  {
    nombre: "Juan Yllanes",
    ocupacion: "PROGRAMMER",
    imagen: "/imagenes/JuanYllanes.png",
    grupo: 2,
  },
  {
    nombre: "Jair Castañeda",
    ocupacion: "PROGRAMMER",
    imagen: "/imagenes/JairCastañeda.jpg",
    grupo: 2,
  },
];

export const CreditosPage = () => {
  return (
    <div className={styles.CreditosPage}>
      <div className={styles.CreditosImg}>
        <img src="/imagenes/Creditos.png" alt="Créditos" />
      </div>
      <h4 className={styles.mensaje}>
        Este proyecto es desarrollado por estudiantes del ISIL Developers Club. Todo el contenido, herramientas y diseño web son realizados por y para{" "}
        <br />
        estudiantes. Nuestro objetivo es construir una comunidad donde todos puedan aprender, compartir y avanzar en su camino como desarrolladores.
      </h4>
      <div className={styles.Colaboradores}>
        {colaboradores
          .filter((colab) => colab.grupo === 1)
          .map((colab) => (
            <div className={styles.Border} key={colab.nombre + colab.grupo}>
              <img className={styles.Fotos} src={colab.imagen} alt={colab.nombre} />
              <h4 className={styles.Ocupacion}>{colab.ocupacion}</h4>
              <h4 className={styles.Nombre}>{colab.nombre}</h4>
            </div>
          ))}
      </div>
      <div className={styles.colab2}>
        <div className={styles.Colaboradores}>
          {colaboradores
            .filter((colab) => colab.grupo === 2)
            .map((colab) => (
              <div className={styles.Border} key={colab.nombre + colab.grupo}>
                <img className={styles.Fotos} src={colab.imagen} alt={colab.nombre} />
                <h4 className={styles.Ocupacion}>{colab.ocupacion}</h4>
                <h4 className={styles.Nombre}>{colab.nombre}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
