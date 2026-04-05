import express from "express";
import cors from "cors";
import { conexion } from "./db.js";

const app = express();
const PORT = 3000;

// middlewares
app.use(cors());
app.use(express.json());


// 🔹 Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});


// 🔹 Obtener favoritos
app.get("/favoritos", (req, res) => {
  conexion.query("SELECT * FROM favoritos", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json(result);
  });
});


// 🔹 Guardar favorito
app.post("/favoritos", (req, res) => {
  const { imdbID, Title, Poster, Year } = req.body;

  const sql = `
    INSERT INTO favoritos (imdbID, titulo, poster, anio)
    VALUES (?, ?, ?, ?)
  `;

  conexion.query(sql, [imdbID, Title, Poster, Year], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json({ mensaje: "Guardado correctamente" });
  });
});


// 🔹 Eliminar favorito
app.delete("/favoritos/:id", (req, res) => {
  const { id } = req.params;

  conexion.query(
    "DELETE FROM favoritos WHERE imdbID = ?",
    [id],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.json({ mensaje: "Eliminado correctamente" });
    }
  );
});


// iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});