import React, { useState, useEffect } from "react";
import "./panel.css";

export const PanelRegistro = ({ cerrar, evento }) => {
  const [nombres, setNombres] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cerrando, setCerrando] = useState(false);

 
  useEffect(() => {
    document.body.classList.add("modal-abierto");
    return () => document.body.classList.remove("modal-abierto");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const datos = {
      nombre: nombres,
      correo,
      telefono,
      subscription: {
        additionalProp1: {},
        additionalProp2: {},
        additionalProp3: {},
      },
    };

    try {
      console.log("Enviando datos a la API:", datos);

      const res = await fetch(
        `https://isildevs.cesarpreciado.com/api/events/${evento.id}/attend`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos),
        }
      );

      if (res.ok) {
        alert("¡Registro exitoso!");
        handleCerrar(); // ✅ Usa el cierre animado
      } else {
        alert("Error al registrar");
      }
    } catch (err) {
      console.error(err);
      alert("No se pudo conectar con el servidor");
    }
  };

  // ✅ Animación de cierre suave
  const handleCerrar = () => {
    setCerrando(true);
    setTimeout(() => {
      cerrar();
    }, 300); // mismo tiempo que el fadeOut del CSS
  };

  return (
    <div className={`registro-panel ${cerrando ? "cerrar" : ""}`}>
      <h2>Formulario de Registro</h2>
      <p>
        <strong>EVENTO: {evento.nombre}</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teléfono (opcional)"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <button type="submit">Enviar Registro</button>
      </form>

      <button type="button" onClick={handleCerrar}>
        Cerrar
      </button>
    </div>
  );
};










