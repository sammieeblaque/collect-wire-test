import request from "supertest";
import app from "../app";

describe("Testing the multiply endpoint", () => {
  const filePath = `${__dirname}/mocks/matrix.csv`;

  test("testing multiply endpoint is successful", async () => {
    const response = await request(app)
      .post("/multiply")
      .attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(362880);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("application/json");
  });
});
