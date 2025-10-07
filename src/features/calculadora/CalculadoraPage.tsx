import { useState } from "react";

import styles from "./calculadora.module.css";

export const CalculadoraPage = () => {
  const [pa1, setPa1] = useState("");
  const [pa2, setPa2] = useState("");
  const [pa3, setPa3] = useState("");
  const [pa4, setPa4] = useState("");
  const [examenFinal, setExamenFinal] = useState("");
  const [promedio, setPromedio] = useState(null);

  const calcularPromedio = () => {
    const n1 = parseFloat(pa1) || 0;
    const n2 = parseFloat(pa2) || 0;
    const n3 = parseFloat(pa3) || 0;
    const n4 = parseFloat(pa4) || 0;
    const exFinal = parseFloat(examenFinal) || 0;

    const resultado = n1 * 0.15 + n2 * 0.15 + n3 * 0.15 + n4 * 0.15 + exFinal * 0.4;
    setPromedio(resultado.toFixed(1));
  };

  return (
    <div className={styles.Calculadora}>
      <div>
        <img className={styles.PromedioCalculadoraTitulo} src="/imagenes/image-removebg-preview.png" alt="" />
      </div>

      <div className={styles.textoCalculadora}>
        <h4>
          Una herramienta sencilla para que cualquier estudiante de ISIL pueda <br />
          calcular su promedio del ciclo. Accesible desde cualquier dispositivo,
          <br />
          disponible para toda la comunidad ISIL.
        </h4>

        <img className={styles.calculadoraImg} src="/imagenes/calculadora.png" alt="" />

        <button className={styles.btnResultado} onClick={calcularPromedio}>
          Calcular Promedio
        </button>
      </div>

      <div className={styles.contenedorNotas}>
        <div className={styles.Notas}>
          <div className={styles.notas}>
            <h4>PA1:</h4>
            <h4>PA2:</h4>
            <h4>PA3:</h4>
            <h4>PA4:</h4>
            <h4>Examen Integral:</h4>
            <h4>Promedio:</h4>
          </div>

          <div className={styles.inputNotas}>
            <input type="number" value={pa1} onChange={(e) => setPa1(e.target.value)} placeholder="Ingrese nota PA1" />
            <input type="number" value={pa2} onChange={(e) => setPa2(e.target.value)} placeholder="Ingrese nota PA2" />
            <input type="number" value={pa3} onChange={(e) => setPa3(e.target.value)} placeholder="Ingrese nota PA3" />
            <input type="number" value={pa4} onChange={(e) => setPa4(e.target.value)} placeholder="Ingrese nota PA4" />
            <input type="number" value={examenFinal} onChange={(e) => setExamenFinal(e.target.value)} placeholder="Ingrese nota Examen Integral" />
            {promedio !== null && <div className={styles.resultado}>Promedio: {promedio}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
