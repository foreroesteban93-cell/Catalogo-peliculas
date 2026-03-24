const Detalle = ({ pelicula, onFavorito }) => {
  if (!pelicula) return null;

  return (
    <div className="detalle">
      <h2>{pelicula.Title}</h2>
      <img src={pelicula.Poster} />
      <p>{pelicula.Plot}</p>
      <p><b>Año:</b> {pelicula.Year}</p>

      <button onClick={() => onFavorito(pelicula)}>
        ⭐ Guardar en favoritos
      </button>
    </div>
  );
};

export default Detalle;