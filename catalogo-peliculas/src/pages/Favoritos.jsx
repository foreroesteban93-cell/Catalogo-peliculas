import { useEffect, useState } from "react";
import { obtenerFavoritos, eliminarFavorito } from "../utils/localStorage";
import PeliculasLista from "../components/PeliculasLista";
import { useNavigate, useLocation } from "react-router-dom";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = obtenerFavoritos();
    console.log("FAVORITOS CARGADOS:", data); // debug
    setFavoritos(data);
  }, [location]);

  const handleDelete = (id) => {
    eliminarFavorito(id);
    setFavoritos(favoritos.filter(f => f.imdbID !== id));
  };

  return (
    <div>
      <h2>Favoritos</h2>

      {favoritos.length === 0 ? (
        <p style={{ marginLeft: "20px" }}>
          No hay películas en favoritos 😢
        </p>
      ) : (
        <PeliculasLista
          peliculas={favoritos}
          onSelect={(id) => navigate(`/detalle/${id}`)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Favoritos;