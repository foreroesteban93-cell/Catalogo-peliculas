import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerDetalles } from "../services/api";
import Detalle from "../components/Detalle";
import { guardarFavorito } from "../utils/localStorage";

function DetallePage() {
  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerDetalles(id);
      setPelicula(data);
    };
    cargar();
  }, [id]);

  return (
    <div>
      <Detalle
        pelicula={pelicula}
        onFavorito={(p) => {
          guardarFavorito(p);
          alert("Guardado en favoritos");
        }}
      />
    </div>
  );
}

export default DetallePage;