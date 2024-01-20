import request from "supertest";
import app from "../app";

describe("Testing the inverse endpoint", () => {
  const filePath = `${__dirname}/mocks/matrix.csv`;

  test("testing inverse endpoint is successful", async () => {
    const response = await request(app)
      .post("/inverse")
      .attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch("1,4,7\n2,5,8\n3,6,9");
    expect(response.ok).toBe(true);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("text/html");
  });
});
