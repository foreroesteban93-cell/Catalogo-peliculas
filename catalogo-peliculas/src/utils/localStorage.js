export const guardarFavorito = (peli) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  favoritos.push(peli);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

export const obtenerFavoritos = () => {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
};  