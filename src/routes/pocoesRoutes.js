import express from "express";

import { getAllpocoes, getpocoesById } from "../controllers/pocoesController.js";

const router = express.Router();

router.get("/", getAllpocoes);
router.get("/:id", getpocoesById)

export default router; 