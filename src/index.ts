import { Request, Response } from "express";
import app from "./app";

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const port = process.env.PORT || 8088;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port} 🔥`);
});
