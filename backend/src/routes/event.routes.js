import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  joinEvent,
  deleteEvent,
} from "../controllers/event.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Create a new event
router.post("/", authenticateUser, createEvent);

// Get all events
router.get("/", authenticateUser, getAllEvents);

// Get a specific event by ID
router.get("/:id", authenticateUser, getEventById);

// Join an event
router.post("/:id/join", authenticateUser, joinEvent);

// Delete an event
router.delete("/:id", authenticateUser, deleteEvent);

export default router;
