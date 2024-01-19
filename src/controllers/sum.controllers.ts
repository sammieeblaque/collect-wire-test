import { csvToArray, readFileFromPath } from "../utils";

export const sumCsvData = async (req, res) => {
  try {
    const csvFile = await readFileFromPath();
    const data = csvToArray(csvFile, true).reduce((a, b) => +a + +b, 0);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
