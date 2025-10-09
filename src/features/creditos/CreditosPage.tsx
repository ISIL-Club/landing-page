import styles from "./creditos.module.css";

export const CreditosPage = () => {
  return (
    <div className={styles.CreditosPage}>
      <div className={styles.CreditosImg}>
        <img src="/img/Creditos.png" alt="Créditos" />
      </div>

      <h4 className={styles.mensaje}>
        Este proyecto es desarrollado por estudiantes del ISIL Developers Club. Todo el contenido, herramientas y diseño web son realizados por y para{" "}
        <br />
        estudiantes. Nuestro objetivo es construir una comunidad donde todos puedan aprender, compartir y avanzar en su camino como desarrolladores.
      </h4>

      <div className={styles.Colaboradores}>
        <div className={styles.Border}>
          <img className={styles.Fotos} src="/img/RafaelAcala.jpg" alt="Rafael Acalá" />
          <h4 className={styles.Ocupacion}>UX/UI DESIGNER</h4>
          <h4 className={styles.Nombre}>Rafael Acalá</h4>
        </div>

        <div className={styles.Border}>
          <img className={styles.Fotos} src="/img/JuanYllanes.png" alt="Juan Yllanes" />
          <h4 className={styles.Ocupacion}>PROGRAMMER</h4>
          <h4 className={styles.Nombre}>Juan Yllanes</h4>
        </div>

        <div className={styles.Border}>
          <img className={styles.Fotos} src="/img/JairCastañeda.jpg" alt="Jair Castañeda" />
          <h4 className={styles.Ocupacion}>PROGRAMMER</h4>
          <h4 className={styles.Nombre}>Jair Castañeda</h4>
        </div>
      </div>

      <div className={styles.colab2}>
        <div className={styles.Colaboradores}>
          <div className={styles.Border}>
            <img className={styles.Fotos} src="/img/AndyChung.jpeg" alt="Andy Chung" />
            <h4 className={styles.Ocupacion}>PROGRAMMER</h4>
            <h4 className={styles.Nombre}>Andy Chung</h4>
          </div>

          <div className={styles.Border}>
            <img className={styles.Fotos} src="/img/JuanYllanes.png" alt="Juan Yllanes" />
            <h4 className={styles.Ocupacion}>PROGRAMMER</h4>
            <h4 className={styles.Nombre}>Juan Yllanes</h4>
          </div>

          <div className={styles.Border}>
            <img className={styles.Fotos} src="/img/JairCastañeda.jpg" alt="Jair Castañeda" />
            <h4 className={styles.Ocupacion}>PROGRAMMER</h4>
            <h4 className={styles.Nombre}>Jair Castañeda</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
