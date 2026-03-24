const PeliculasLista = ({ peliculas, onSelect }) => {
  return (
    <div className="grid">
      {peliculas.map((peli) => (
        <div
          className="card"
          key={peli.imdbID}
          onClick={() => {
            console.log("CLICK:", peli.imdbID); // 👈 prueba
            onSelect(peli.imdbID);
          }}
        >
          <img
            src={
              peli.Poster !== "N/A"
                ? peli.Poster
                : "https://via.placeholder.com/200"
            }
            alt={peli.Title}
          />
          <h3>{peli.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PeliculasLista;