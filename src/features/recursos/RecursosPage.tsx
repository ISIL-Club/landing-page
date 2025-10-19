import "./recursos.css";


//PRUEBA DE CONEXION A DISCORD2
const recursosIcons: { linkIcon: string; descripcion: string; linkRef: string }[] = [
    {
        descripcion: "Cursos Gratuitos",
        linkIcon: "cursosgratuitos.png",
        linkRef: "",
    },
    {
        descripcion: "Certificados",
        linkIcon: "certificado.png",
        linkRef: "",
    },
    {
        descripcion: "Articulos",
        linkIcon: "articulos.png",
        linkRef: "",
    },
    {
        descripcion: "Herramientas",
        linkIcon: "tools.png",
        linkRef: "",
    },
];

export const RecursosPage = () => {
    return (
        <div className="recursos-body">
            <h1>Recursos/</h1>
            <div className="recursos-list">
                {recursosIcons.map(({ descripcion, linkIcon, linkRef }, i) => (
                    <div key={i} className="recursos-item">
                        <img src={`img/${linkIcon}`} alt={descripcion} />
                        <h4>{descripcion}</h4>
                        <button>Ver más</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
