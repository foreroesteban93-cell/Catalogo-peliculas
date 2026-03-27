import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import Buscar from "./pages/Buscar.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import DetallePage from "./pages/DetallePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>🎬 Películas</h2>

        <div>
          <Link to="/">Inicio</Link>
          <Link to="/buscar">Buscar</Link>
          <Link to="/favoritos">Favoritos</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalle/:id" element={<DetallePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;