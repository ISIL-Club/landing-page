import "./eventostabla.css";
import { useState } from "react";
import { PanelRegistro } from "./PanelRegistro";

export const TodosEventos = ({ events, volver }) => {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  /*const abrirRegistro = (evento) => {
    setEventoSeleccionado(evento)
    setMostrarRegistro(true)
  }*/
  const abrirRegistro = (evento) => {
    console.log("Evento seleccionado:", evento); // 👈 Mira aquí el id real
    setEventoSeleccionado(evento);
    setMostrarRegistro(true);
  };

  const cerrarRegistro = () => {
    setMostrarRegistro(false);
    setEventoSeleccionado(null);
    document.body.style.overflow = ""; // restaurar scroll
  };

  return (
    <div className="body2">
      <section className="second2">
        <h1 id="reu1">Todos los eventos</h1>

        <div className="events-container1">
          {events.slice(0, 6).map((evento) => (
            <div className="event-card2" key={evento.id}>
              <div className="event-date2">
                <strong>
                  {new Date(evento.fecha).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                  })}
                </strong>
              </div>

              <div className="event-info2">
                <h2> Ponente: {evento.ponente}</h2>
                <h3>{evento.nombre}</h3>
                <p>{evento.lugar}</p>
                <p>{evento.link}</p>
                <p>{evento.organizador}</p>
                <p>{evento.descripcion}</p>
              </div>

              <button className="btn-register" onClick={() => abrirRegistro(evento)}>
                Registrate Ahora
              </button>
            </div>
          ))}
        </div>
        <button className="events-btn2" onClick={volver}>
          Volver
        </button>
      </section>

      {/* Render del panel: si mostrarRegistro es true se monta el componente PanelRegistro */}

      {mostrarRegistro && <PanelRegistro evento={eventoSeleccionado} cerrar={cerrarRegistro} />}
    </div>
  );
};
