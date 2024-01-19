import { Response } from "express";
import { csvToArray, readFileFromPath } from "../utils";
import { FileType } from "../@types";

export const flattenCsvData = async (req, res: Response) => {
  const file: FileType = req.file;

  try {
    const csvFile = await readFileFromPath(file.path);
    const data = csvToArray(csvFile, true).toString();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
};
