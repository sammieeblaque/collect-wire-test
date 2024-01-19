import * as fs from "fs";
import { FileType } from "../@types";

export const csvToArray = (csv: string | Buffer, flatten?: boolean) => {
  const csvString = csv as string;
  const rows = csvString.split("\n");
  const result = [];

  for (const row of rows) {
    const values = row.split(",");
    result.push(values);
  }

  return flatten ? result.flat(Infinity) : result;
};

export const readFileFromPath = (path: string) => {
  let data = fs.readFileSync(path, { encoding: "utf-8" });
  return data;
};

export const transpose = (arr) => arr[0].map((x, i) => arr.map((x) => x[i]));

export const validateFileType = (file: FileType) => {
  const validTypes = ["text/csv"];
  return validTypes.includes(file.mimetype);
};