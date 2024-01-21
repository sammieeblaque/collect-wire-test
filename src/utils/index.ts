import * as fs from "fs";
import { FileType } from "../types/@types";

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
  const data = fs.readFileSync(path, { encoding: "utf-8" });
  return data;
};

export const transpose = (arr) => arr[0].map((x, i) => arr.map((x) => x[i]));

export const validateFileType = (file: FileType) => {
  const validTypes = ["text/csv"];
  return validTypes.includes(file.mimetype);
};

export const add = (a, b) => a + b;

export const isValidMatrix = (matrix) => {
  // Check if the matrix is not empty
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  // Check if all rows have the same number of columns
  const numColumns = matrix[0].length;
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i].length !== numColumns) {
      return false;
    }
  }

  // If all checks pass, the matrix is valid
  return true;
};

// Example usage:
const validMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const invalidMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
];

export const isValidCSV = (csvInput) => {
  // Split the CSV input into rows
  const rows = csvInput.split("\n");

  // Check if there is at least one row
  if (rows.length === 0) {
    return false;
  }

  // Get the number of columns in the first row
  const numColumns = rows[0].split(",").length;

  // Check the number of columns in each row
  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].split(",");

    // Check if the number of columns is consistent
    if (columns.length !== numColumns) {
      return false;
    }
  }

  // If all checks pass, the CSV is valid
  return true;
};
