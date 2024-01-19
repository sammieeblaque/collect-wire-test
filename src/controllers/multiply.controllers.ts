import { Response } from "express";
import { csvToArray, readFileFromPath } from "../utils";

export const multitplyCsvData = async (req, res: Response) => {
  try {
    const csvFile = await readFileFromPath();
    const data = csvToArray(csvFile, true).reduce((a, b) => a * b);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
