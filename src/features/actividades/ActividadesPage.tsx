import "./activities.css";

const actividadesIcons: { linkIcon: string; descripcion: string; linkRef: string }[] = [
  {
    descripcion: "Talleres prácticos",
    linkIcon: "talleres-icon.svg",
    linkRef: "",
  },
  {
    descripcion: "Proyectos colaborativos",
    linkIcon: "colaborativos-icon.svg",
    linkRef: "",
  },
  {
    descripcion: "Hackatons",
    linkIcon: "hackatons-icon.svg",
    linkRef: "",
  },
  {
    descripcion: "Charlas con \n profesionales tech",
    linkIcon: "charlas-icon.svg",
    linkRef: "",
  },
  {
    descripcion: "Desarrollo web",
    linkIcon: "web-icon.svg",
    linkRef: "",
  },
  {
    descripcion: "Inteligencia artificial",
    linkIcon: "ia-icon.svg",
    linkRef: "",
  },
  {
    descripcion: "Comunidad en Discord",
    linkIcon: "discord.png",
    linkRef: "",
  },
  {
    linkIcon: "app-text.png",
    descripcion: "Desarrollo de apps\n móviles",
    linkRef: "",
  },
];

export const ActividadesPage = () => {
  return (
    <div className="activities-body">
      <h1>Actividades/</h1>
      <div className="activities-list">
        {actividadesIcons.map(({ descripcion, linkIcon, linkRef }, i) => (
          <div key={i} className="activities-item">
            <img src={`img/${linkIcon}`} alt={descripcion} />
            <h4>{descripcion}</h4>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};
