import request from "supertest";
import app from "../app";

describe("Testing the sum endpoint", () => {
  const filePath = `${__dirname}/mocks/matrix.csv`;

  test("testing sum endpoint is successful", async () => {
    const response = await request(app).post("/sum").attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(45);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("application/json");
  });
});
