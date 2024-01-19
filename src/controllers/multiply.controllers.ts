import { Request, Response } from "express";
import { csvToArray, readFileFromPath } from "../utils";
import { FileType } from "../@types";

export const multitplyCsvData = async (req, res) => {
  const file: FileType = req.file;

  try {
    const csvFile = await readFileFromPath(file.path);
    const data = csvToArray(csvFile, true).reduce((a, b) => a * b);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
