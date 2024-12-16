import express from "express";
import {
  getUserNotifications,
  markNotificationAsRead,
} from "../controllers/notification.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Get notifications for a user
router.get("/", authenticateUser, getUserNotifications);

// Mark a notification as read
router.put("/:id/read", authenticateUser, markNotificationAsRead);

export default router;
