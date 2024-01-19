import { csvToArray, readFileFromPath, transpose } from "../utils";

export const inverseCsvData = async (req, res) => {
  try {
    const csvFile = await readFileFromPath();
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
