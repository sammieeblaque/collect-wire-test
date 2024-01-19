import { FileType } from "../@types";
import { csvToArray, readFileFromPath } from "../utils";

export const sumCsvData = async (req, res) => {
  const file: FileType = req.file;

  try {
    const csvFile = await readFileFromPath(file.path);
    const data = csvToArray(csvFile, true).reduce((a, b) => +a + +b, 0);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
