import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from "./middlewares/error.middleware.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use("/api", routes);

export default app;
