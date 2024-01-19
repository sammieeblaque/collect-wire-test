import { FileType } from "../@types";
import { csvToArray, readFileFromPath, transpose } from "../utils";

export const inverseCsvData = async (req, res) => {
  const file: FileType = req.file;

  try {
    const csvFile = await readFileFromPath(file.path);
    const data = csvToArray(csvFile);
    const inverseData = transpose(data);
    const formatedInverseData = inverseData
      .map((row) => row.join(","))
      .join("\n");
    res.send(formatedInverseData);
  } catch (error) {
    console.error(error);
  }
};
