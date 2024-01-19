import { FileType } from "../@types";
import {
  csvToArray,
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
    const csvFile = await readFileFromPath(file.path);
    const data = csvToArray(csvFile);
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
