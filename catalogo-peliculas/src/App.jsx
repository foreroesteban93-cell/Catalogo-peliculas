import { useState, useEffect } from "react";
import Buscador from "./components/Buscador.jsx";
import PeliculasLista from "./components/PeliculasLista.jsx";
import Detalle from "./components/Detalle.jsx";
import { buscarPeliculas, obtenerDetalles } from "./services/api";
import { guardarFavorito, obtenerFavoritos } from "./utils/localStorage.js";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [detalle, setDetalle] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  // 🎬 Películas iniciales
  useEffect(() => {
    const cargarInicial = async () => {
      const results = await buscarPeliculas("batman");
      setPeliculas(results);
    };

    cargarInicial();
  }, []);

  // 🔍 Buscar
  const handleBuscar = async (texto) => {
    const results = await buscarPeliculas(texto);
    setPeliculas(results);
  };

  // 📄 Detalle
  const handleDetalle = async (id) => {
    const data = await obtenerDetalles(id);
    setDetalle(data);
  };

  // ⭐ Guardar favorito (SIN useEffect)
  const handleFavorito = (peli) => {
    const favs = obtenerFavoritos();

    const existe = favs.some(f => f.imdbID === peli.imdbID);
    if (existe) {
      alert("Ya está en favoritos");
      return;
    }

    guardarFavorito(peli);

    // 🔥 actualizar directamente
    setFavoritos([...favs, peli]);

    alert("Guardado en favoritos");
  };

  return (
    <div>
      <h1>🎬 Catálogo de Películas</h1>

      <Buscador onBuscar={handleBuscar} />

      <Detalle pelicula={detalle} onFavorito={handleFavorito} />

      <h2>Películas</h2>
      <PeliculasLista peliculas={peliculas} onSelect={handleDetalle} />

      <h2>⭐ Favoritos</h2>
      <PeliculasLista peliculas={favoritos} onSelect={handleDetalle} />
    </div>
  );
}

export default App;