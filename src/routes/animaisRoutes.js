import express from "express";

import { getAllanimais, getanimaisById} from "../controllers/animaisController.js"

const router = express.Router();

router.get("/", getAllanimais);
router.get("/:id", getanimaisById)

export default router