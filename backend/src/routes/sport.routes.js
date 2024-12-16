import express from "express";
import { createSport, getAllSports } from "../controllers/sport.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Create a sport
router.post("/", authenticateUser, createSport);

// Get all sports
router.get("/", authenticateUser, getAllSports);

export default router;
