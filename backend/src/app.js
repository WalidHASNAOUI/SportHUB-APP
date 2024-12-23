import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from "./middlewares/error.middleware.js";
import routes from "./routes/index.js";
import connectDB from './config/db.js';
import cors from 'cors'; // Import cors

dotenv.config();

const app = express();

connectDB()

// Enable CORS
const corsOptions = {
    origin: 'http://localhost:4200', // Angular app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed methods
    credentials: true, // Allow cookies if needed
  };

  app.use(cors(corsOptions));

// Middleware for parsing JSON
app.use(express.json());

// Our custom error handling middleware
app.use(errorHandler);

// Add routes
app.use("/api", routes);

export default app;
