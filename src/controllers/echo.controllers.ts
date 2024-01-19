import { FileType } from "../@types";
import { readFileFromPath } from "../utils";

export const echoCsvData = async (req, res) => {
  const file: FileType = req.file;
  try {
    const data = await readFileFromPath(file.path);
    res.send(data);
  } catch (error) {
    console.error(error);
  }
};
