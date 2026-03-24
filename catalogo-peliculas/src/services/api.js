const API_KEY = "f016b64";

export const buscarPeliculas = async (query) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();

  console.log("API data:", data); // 👈 importante

  return data.Search || [];
};

export const obtenerDetalles = async (id) => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  return res.json();
};