import { Response } from "express";
import { csvToArray, readFileFromPath } from "../utils";

export const flattenCsvData = async (req, res: Response) => {
  try {
    const csvFile = await readFileFromPath();
    const data = csvToArray(csvFile, true).toString();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
};
