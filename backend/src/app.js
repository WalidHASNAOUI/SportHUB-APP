import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from "./middlewares/error.middleware.js";
import routes from "./routes/index.js";
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB()

app.use(express.json());
app.use(errorHandler);
app.use("/api", routes);

export default app;
