import { useState } from "react";

import styles from "./calculadora.module.css";
import { useNavigate } from "react-router";

export const CalculadoraPage = () => {
  const navigate = useNavigate();
  const [notas, setNotas] = useState({
    pa1: "",
    pa2: "",
    pa3: "",
    pa4: "",
    examenFinal: "",
  });
  const { examenFinal, pa1, pa2, pa3, pa4 } = notas;
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

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (value >= 20) {
      setNotas({ ...notas, [name]: 20 });
      return;
    }
    setNotas({ ...notas, [name]: value });
  };

  const onBackNavigate = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo" onClick={onBackNavigate} style={{ cursor: "pointer" }}>
              <img src="/icon/logo-isil.jpg" alt="ISIL" />
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Calculadora de promedios/</h1>
        <section className={styles.section}>
          <div className={styles.content}>
            <p>
              Una herramienta sencilla para que cualquier estudiante de ISIL pueda <br />
              calcular su promedio del ciclo. Accesible desde cualquier dispositivo, <br />
              disponible para toda la comunidad ISIL.
            </p>
            <div>
              <img className="img-fluid" style={{ width: 280 }} src="/img/calculadora.png" alt="" />
            </div>
            <button onClick={calcularPromedio}>Calcular Promedio</button>
          </div>

          <form className={styles.formCalc} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>PA1</label>
              <input name="pa1" type="number" value={pa1} onChange={handleInput} max={20} min={0} step="any" inputMode="decimal" />
            </div>
            <div>
              <label>PA2</label>
              <input name="pa2" type="number" value={pa2} onChange={handleInput} max={20} min={0} step="any" inputMode="decimal" />
            </div>
            <div>
              <label>PA3</label>
              <input name="pa3" type="number" value={pa3} onChange={handleInput} max={20} min={0} step="any" inputMode="decimal" />
            </div>
            <div>
              <label>PA4</label>
              <input name="pa4" type="number" value={pa4} onChange={handleInput} max={20} min={0} step="any" inputMode="decimal" />
            </div>
            <div>
              <label>Evaluación Final</label>
              <input name="examenFinal" type="number" value={examenFinal} onChange={handleInput} max={20} min={0} step="any" inputMode="decimal" />
            </div>
            <div>
              <label>Promedio</label>
              <input name="promedio" type="text" value={promedio ?? ""} readOnly />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};
