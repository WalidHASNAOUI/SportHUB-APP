import express from "express";
import {
  createPublication,
  getAllPublications,
  getPublicationById,
  deletePublication,
} from "../controllers/publication.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Create a publication
router.post("/", authenticateUser, createPublication);

// Get all publications
router.get("/", authenticateUser, getAllPublications);

// Get a specific publication by ID
router.get("/:id", authenticateUser, getPublicationById);

// Delete a publication
router.delete("/:id", authenticateUser, deletePublication);

export default router;
