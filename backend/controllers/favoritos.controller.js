import {
  obtenerFavoritos,
  insertarFavorito,
  eliminarFavorito,
} from "../models/favoritos.model.js";

// 🔹 Obtener todos los favoritos
export const getFavoritos = (req, res) => {
  obtenerFavoritos((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

// 🔹 Guardar favorito
export const addFavorito = (req, res) => {
  insertarFavorito(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json({ mensaje: "Guardado correctamente" });
  });
};

// 🔹 Eliminar favorito
export const deleteFavorito = (req, res) => {
  const { id } = req.params;

  eliminarFavorito(id, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json({ mensaje: "Eliminado correctamente" });
  });
};