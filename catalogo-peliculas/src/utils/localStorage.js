export const guardarFavorito = (peli) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // evitar duplicados
  const existe = favoritos.some(f => f.imdbID === peli.imdbID);

  if (!existe) {
    favoritos.push(peli);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
};

export const obtenerFavoritos = () => {
  try {
    const data = JSON.parse(localStorage.getItem("favoritos"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export const eliminarFavorito = (id) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const nuevos = favoritos.filter(f => f.imdbID !== id);

  localStorage.setItem("favoritos", JSON.stringify(nuevos));
};