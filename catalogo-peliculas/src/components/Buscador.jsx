import { useState } from "react";

const Buscador = ({ onBuscar }) => {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(texto);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button>Buscar</button>
    </form>
  );
};

export default Buscador;