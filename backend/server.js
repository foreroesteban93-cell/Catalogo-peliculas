import express from "express";
import cors from "cors";
import favoritosRoutes from "./routes/favoritos.routes.js";

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


app.use("/favoritos", favoritosRoutes);


app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});