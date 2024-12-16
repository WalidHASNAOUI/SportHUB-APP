import express from "express";
import {
  sendMessage,
  getMessagesBetweenUsers,
} from "../controllers/message.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Send a message
router.post("/", authenticateUser, sendMessage);

// Get messages between two users
router.get("/:userId", authenticateUser, getMessagesBetweenUsers);

export default router;
