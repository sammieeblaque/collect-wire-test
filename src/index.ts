import { Request, Response } from "express";
import app from "./app";

app.get("/", (req: Request, res: Response) => {
  res.send("Collect Wire Test");
});

const port = process.env.PORT || 8088;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port} 🔥`);
});
