import { conexion } from "../db.js";

// 🔹 Obtener favoritos
export const obtenerFavoritos = (callback) => {
  conexion.query("SELECT * FROM favoritos", callback);
};

// 🔹 Insertar favorito
export const insertarFavorito = (datos, callback) => {
  const { imdbID, Title, Poster, Year } = datos;

  const sql = `
    INSERT INTO favoritos (imdbID, titulo, poster, anio)
    VALUES (?, ?, ?, ?)
  `;

  conexion.query(sql, [imdbID, Title, Poster, Year], callback);
};

// 🔹 Eliminar favorito
export const eliminarFavorito = (id, callback) => {
  conexion.query(
    "DELETE FROM favoritos WHERE imdbID = ?",
    [id],
    callback
  );
};