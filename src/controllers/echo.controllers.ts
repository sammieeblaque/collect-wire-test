import { FileType } from "../@types";
import { readFileFromPath, validateFileType } from "../utils";

export const echoCsvData = async (req, res) => {
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
    const data = await readFileFromPath(file.path);
    res.send(data);
  } catch (error) {
    if (error) {
      res.json({
        status: 500,
        message: "an error occured while precessing file",
      });
    }
  }
};
