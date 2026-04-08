import { Router } from "express";
import {
  getFavoritos,
  addFavorito,
  deleteFavorito,
} from "../controllers/favoritos.controller.js";

const router = Router();

router.get("/", getFavoritos);
router.post("/", addFavorito);
router.delete("/:id", deleteFavorito);

export default router;