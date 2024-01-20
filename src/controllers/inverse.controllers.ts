import { FileType } from "../@types";
import {
  csvToArray,
  isValidCSV,
  isValidMatrix,
  readFileFromPath,
  transpose,
  validateFileType,
} from "../utils";

export const inverseCsvData = async (req, res) => {
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

    // Checks if csv input is valid
    const csvFile = await readFileFromPath(file.path);
    if (!isValidCSV(csvFile)) {
      return res.status(422).json({
        status: 422,
        message: "Invalid csv input",
      });
    }
    const data = csvToArray(csvFile);

    // Checks if matrix input is valid
    if (!isValidMatrix(data)) {
      return res.status(422).json({
        status: 422,
        message: "Invalid matrix input",
      });
    }
    const inverseData = transpose(data);
    const formatedInverseData = inverseData
      .map((row) => row.join(","))
      .join("\n");
    res.send(formatedInverseData);
  } catch (error) {
    res.json({
      status: 500,
      message: "an error occured while precessing file",
    });
  }
};
