import { useEffect, useState } from "react";
import { buscarPeliculas } from "../services/api";
import PeliculasLista from "../components/PeliculasLista";
import { useNavigate } from "react-router-dom";

function Home() {
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargar = async () => {
      const res = await buscarPeliculas("batman");
      setPeliculas(res || []);
    };
    cargar();
  }, []);

  return (
    <div>
      <h2>Inicio</h2>
      <PeliculasLista
        peliculas={peliculas}
        onSelect={(id) => navigate(`/detalle/${id}`)}
      />
    </div>
  );
}

export default Home;