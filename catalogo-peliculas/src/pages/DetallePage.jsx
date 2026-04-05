import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerDetalles } from "../services/api";
import Detalle from "../components/Detalle";

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
      onFavorito={async (p) => {
        await fetch("http://localhost:3000/favoritos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(p),
        });

        alert("Guardado en favoritos");
      }}
    />
    </div>
  );
}

export default DetallePage;