import express from "express";
import commentRoutes from "./comment.routes.js";
import eventRoutes from "./event.routes.js";
import likeRoutes from "./like.routes.js";
import messageRoutes from "./message.routes.js";
import notificationRoutes from "./notification.routes.js";
import publicationRoutes from "./publication.routes.js";
import sportRoutes from "./sport.routes.js";
import userRoutes from "./user.routes.js";

const router = express.Router();

// Add all routes
router.use("/comments", commentRoutes);
router.use("/events", eventRoutes);
router.use("/likes", likeRoutes);
router.use("/messages", messageRoutes);
router.use("/notifications", notificationRoutes);
router.use("/publications", publicationRoutes);
router.use("/sports", sportRoutes);
router.use("/users", userRoutes);

export default router;
