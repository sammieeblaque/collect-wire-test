import { FileType } from "../types/@types";
import {
  csvToArray,
  isValidCSV,
  readFileFromPath,
  validateFileType,
} from "../utils";

export const sumCsvData = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({
        status: 402,
        message: "No document file uploaded",
      });
    }
    const file: FileType = req.file;
    if (!validateFileType(file)) {
      return res.json({
        status: 406,
        message: "Invalid document file type",
      });
    }
    const csvFile = await readFileFromPath(file.path);

    // Checks if csv input is valid
    if (!isValidCSV(csvFile)) {
      return res.status(422).json({
        status: 422,
        message: "Invalid csv input",
      });
    }
    const data = csvToArray(csvFile, true).reduce((a, b) => +a + +b, 0);
    res.json(data);
  } catch (error) {
    res.json({
      status: 500,
      message: "an error occured while precessing file",
    });
  }
};
