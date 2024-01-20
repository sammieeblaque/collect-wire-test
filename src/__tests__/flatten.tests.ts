import request from "supertest";
import app from "../app";

describe("Testing the flatten endpoint", () => {
  const filePath = `${__dirname}/mocks/matrix.csv`;

  test("testing flatten  endpoint is successful", async () => {
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
