import express from "express";
import {
  createComment,
  getCommentsByPublication,
} from "../controllers/comment.controller.js";
import { authenticateUser } from '../middlewares/auth.middleware.js';  // Correct import

const router = express.Router();

// Create a new comment
router.post("/", authenticateUser, createComment);

// Get comments for a specific publication
router.get("/:publicationId", authenticateUser, getCommentsByPublication);

export default router;
