import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import compression from "compression";

// Dotenv invocation
dotenv.config();

const app: Express = express();

app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port} 🔥`);
});
