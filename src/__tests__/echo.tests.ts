import request from "supertest";
import fs from "fs";
import path from "path";
import { add } from "../utils";

import app from "../app";

const filePath = path.resolve("matrix.csv");

describe("Testing endpoints returns correct values", () => {
  test("testing echo endpoint", async () => {
    const response = await request(app).post("/echo").attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch("1,2,3\n4,5,6\n7,8,9");
    expect(response.ok).toBe(true);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("text/html");
  });

  test("testing inverse endpoint", async () => {
    const response = await request(app)
      .post("/inverse")
      .attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch("1,4,7\n2,5,8\n3,6,9");
    expect(response.ok).toBe(true);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("text/html");
  });

  test("testing multiply endpoint", async () => {
    const response = await request(app)
      .post("/multiply")
      .attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(362880);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("application/json");
  });

  test("testing sum endpoint", async () => {
    const response = await request(app).post("/sum").attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(45);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("application/json");
  });

  test("testing flatten  endpoint", async () => {
    const response = await request(app)
      .post("/flatten")
      .attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch("1,2,3,4,5,6,7,8,9");
    expect(response.ok).toBe(true);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("text/html");
  });
});
