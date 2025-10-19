import styles from "./creditos.module.css";

const colaboradores = [
  {
    nombre: "Rafael Acalá",
    ocupacion: "UX/UI DESIGNER",
    imagen: "img/RafaelAcala.jpg",
  },
  {
    nombre: "Juan Yllanes",
    ocupacion: "PROGRAMMER",
    imagen: "img/JuanYllanes.png",
  },
  {
    nombre: "Jair Castañeda",
    ocupacion: "PROGRAMMER",
    imagen: "img/JairCastañeda.jpg",
  },
  {
    nombre: "Andy Chung",
    ocupacion: "PROGRAMMER",
    imagen: "img/AndyChung.jpeg",
  },
  {
    nombre: "Ana Rivas",
    ocupacion: "PROGRAMMER",
    imagen: "img/AnaRivas.jpg",
  },
  {
    nombre: "Jair Castañeda",
    ocupacion: "PROGRAMMER",
    imagen: "img/JairCastañeda.jpg",
  },
];

export const CreditosPage = () => {
  return (
    <div className={styles.CreditosPage}>
      <div className={styles.CreditosImg}>
        <img src="img/Creditos.png" alt="Créditos" />
      </div>
      <h4 className={styles.mensaje}>
        Este proyecto es desarrollado por estudiantes del ISIL Developers Club. Todo el contenido, herramientas y diseño web son realizados por y para{" "}
        <br />
        estudiantes. Nuestro objetivo es construir una comunidad donde todos puedan aprender, compartir y avanzar en su camino como desarrolladores.
      </h4>
      <div className={styles.ColaboradoresGrid}>
        {colaboradores.map((colab) => (
          <div className={styles.CardColaborador} key={colab.nombre}>
            <div className={styles.FotoWrapper}>
              <img className={styles.Fotos} src={colab.imagen} alt={colab.nombre} />
            </div>
            <h4 className={styles.Ocupacion}>{colab.ocupacion}</h4>
            <h4 className={styles.Nombre}>{colab.nombre}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
