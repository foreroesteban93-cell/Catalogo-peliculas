import { useState } from "react";
import Buscador from "../components/Buscador";
import PeliculasLista from "../components/PeliculasLista";
import { buscarPeliculas } from "../services/api";
import { useNavigate } from "react-router-dom";

function Buscar() {
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate();

  const handleBuscar = async (texto) => {
    const res = await buscarPeliculas(texto);
    setPeliculas(res || []);
  };

  return (
    <div>
      <h2>Buscar</h2>
      <Buscador onBuscar={handleBuscar} />
      <PeliculasLista
        peliculas={peliculas}
        onSelect={(id) => navigate(`/detalle/${id}`)}
      />
    </div>
  );
}

export default Buscar;