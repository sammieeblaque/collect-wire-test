import request from "supertest";
import fs from "fs";
import path from "path";
import { add } from "../utils";

import app from "../app";

const filePath = path.resolve("matrix.csv");

describe("a functions adds correctly", () => {
  test("add two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("testing endpoints", () => {
  test("testing echo endpoint", async () => {
    const response = await request(app).post("/echo").attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch("1,2,3\n4,5,6\n7,8,9");
    expect(response.ok).toBe(true);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("text/html");
  });
});
