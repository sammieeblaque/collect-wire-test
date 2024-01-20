import request from "supertest";
import app from "../app";

describe("Testing the echo endpoint", () => {
  const filePath = `${__dirname}/mocks/matrix.csv`;

  test("testing echo endpoint is succesful", async () => {
    const response = await request(app).post("/echo").attach("file", filePath);
    expect(response.text).toMatch("1,2,3\n4,5,6\n7,8,9");
    expect(response.ok).toBe(true);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("text/html");
  });
});
