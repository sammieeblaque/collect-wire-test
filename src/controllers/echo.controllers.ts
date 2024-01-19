import { readFileFromPath } from "../utils";

export const echoCsvData = async (req, res) => {
  try {
    const data = await readFileFromPath();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
};
