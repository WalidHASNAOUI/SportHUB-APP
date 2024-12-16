import express from "express";
import { likePublication, unlikePublication } from "../controllers/like.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Like a publication
router.post("/:publicationId", authenticateUser, likePublication);

// Unlike a publication
router.delete("/:publicationId", authenticateUser, unlikePublication);

export default router;
