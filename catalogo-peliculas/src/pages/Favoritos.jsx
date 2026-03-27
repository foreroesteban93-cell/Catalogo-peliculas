const PeliculasLista = ({ peliculas, onSelect, onDelete }) => {
  return (
    <div className="grid">
      {Array.isArray(peliculas) &&
        peliculas.map((peli) => (
          <div className="card" key={peli.imdbID}>
            <img
              src={
                peli.Poster !== "N/A"
                  ? peli.Poster
                  : "https://via.placeholder.com/200"
              }
              alt={peli.Title}
              onClick={() => onSelect(peli.imdbID)}
            />

            <h3>{peli.Title}</h3>

            {onDelete && (
              <button onClick={() => onDelete(peli.imdbID)}>
                Eliminar
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default PeliculasLista;