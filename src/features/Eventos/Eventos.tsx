import { useState, useEffect } from "react";
import "./eventos.css";
import { TodosEventos } from "./Eventostabla";

const formatDate = (dateStr) => {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
    });
  } catch (e) {
    return "Fecha no disponible";
  }
};

export const Eventos = () => {
  const [events, setEvents] = useState([]);
  const [verTodos, setVerTodos] = useState(false);

  useEffect(() => {
    fetch("https://isildevs.cesarpreciado.com/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error cargando eventos:", error));
  }, []);

  if (verTodos) {
    return <TodosEventos events={events} volver={() => setVerTodos(false)} />;
  }

  return (
    <div className="body">
      <section className="first">
        <h1 id="events-tittle"> EVENTOS/</h1>
        <p id="p-first">
          Aquí se anunciarán los próximos talleres, hackathons, charlas, webinars y actividades especiales. <br />
          Toda la información estará disponible en la sección de eventos y nuestro Discord.
        </p>
      </section>

      {/*
      <section className="second">
        <h2 id='reu'>Reuniones</h2>
        {events.map(eventos => (
          <div className="re-back" key={eventos.id}>
            <div className="re-date">
              <strong>{formatDate(eventos.fecha)}</strong>
            </div>
            <div className="re-info">
              <h3>{eventos.nombre}</h3>
              <p>{eventos.lugar}</p>
            </div>
          </div>
        ))}

        <button className='events-btn' onClick={() => setVerTodos(true)}>
          Ver todos los eventos
        </button>
      </section>
      */}

      <section className="second">
        <h2 id="reu">Reuniones</h2>

        <div className="events-container">
          {events.slice(0, 4).map((eventos) => (
            <div className="event-card" key={eventos.id}>
              <div className="event-date">
                <strong>{formatDate(eventos.fecha)}</strong>
              </div>
              <div className="event-info">
                <h3>{eventos.nombre}</h3>
                <p>{eventos.lugar}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="events-btn" onClick={() => setVerTodos(true)}>
          Ver todos los eventos
        </button>
      </section>
    </div>
  );
};
