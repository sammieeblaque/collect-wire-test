import request from "supertest";
import app from "../app";

describe("Testing the multiply endpoint", () => {
  const filePath = `${__dirname}/mocks/matrix.csv`;
  const filePathWrong = `${__dirname}/mocks/matrix.xslx`;
  const invalidCsv = `${__dirname}/mocks/invalid-matrix.csv`;

  test("testing multiply endpoint is successful", async () => {
    const response = await request(app)
      .post("/multiply")
      .attach("file", filePath);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(362880);
    expect(response.body).toBeTruthy();
    expect(response.type).toMatch("application/json");
  });

  test("test multiply endpoint when there's no file", async () => {
    const response = await request(app).post("/multiply").attach("file", null);
    expect(response.body.status).toBe(402);
    expect(response.body.message).toMatch("No document file uploaded");
    expect(response.type).toBe("application/json");
  });

  test("test multiply endpoint when a wrong file format", async () => {
    const response = await request(app)
      .post("/multiply")
      .attach("file", filePathWrong);
    expect(response.body.status).toBe(406);
    expect(response.body.message).toMatch("Invalid document file type");
    expect(response.type).toBe("application/json");
  });
  test("test multiply endpoint for invalid csv input", async () => {
    const response = await request(app)
      .post("/multiply")
      .attach("file", invalidCsv);
    expect(response.body.status).toBe(422);
    expect(response.body.message).toMatch("Invalid csv input");
    expect(response.type).toBe("application/json");
  });
});
