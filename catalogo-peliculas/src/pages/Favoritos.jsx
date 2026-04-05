import { useEffect, useState } from "react";
import PeliculasLista from "../components/PeliculasLista";

function Favoritos() {
  const [peliculas, setPeliculas] = useState([]);

  // 🔹 Cargar favoritos desde el backend
  const cargarFavoritos = async () => {
    try {
      const res = await fetch("http://localhost:3000/favoritos");
      const data = await res.json();

      // adaptamos los datos al formato que ya usa tu app
      const adaptadas = data.map((p) => ({
        imdbID: p.imdbID,
        Title: p.titulo,
        Poster: p.poster,
        Year: p.anio,
      }));

      setPeliculas(adaptadas);
    } catch (error) {
      console.error("Error cargando favoritos:", error);
    }
  };

  // 🔹 Eliminar favorito
  const eliminarFavorito = async (id) => {
    try {
      await fetch(`http://localhost:3000/favoritos/${id}`, {
        method: "DELETE",
      });

      // recargar lista después de eliminar
      cargarFavoritos();
    } catch (error) {
      console.error("Error eliminando:", error);
    }
  };

  // 🔹 useEffect (cuando carga la página)
  useEffect(() => {
    cargarFavoritos();
  }, []);

  return (
    <div>
      <h2>Favoritos</h2>

      {peliculas.length === 0 ? (
        <p>No hay favoritos guardados</p>
      ) : (
        <PeliculasLista
          peliculas={peliculas}
          onSelect={(id) => window.location.href = `/detalle/${id}`}
          onDelete={eliminarFavorito}
        />
      )}
    </div>
  );
}

export default Favoritos;