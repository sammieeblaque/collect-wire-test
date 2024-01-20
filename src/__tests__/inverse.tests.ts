import request from "supertest";
import app from "../app";

describe("Testing the inverse endpoint", () => {
  const filePath = `${__dirname}/mocks/matrix.csv`;
  const filePathWrong = `${__dirname}/mocks/matrix.xslx`;
  const invalidCsv = `${__dirname}/mocks/invalid-matrix.csv`;

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

  test("test inverse endpoint when there's no file", async () => {
    const response = await request(app).post("/inverse").attach("file", null);
    expect(response.body.status).toBe(402);
    expect(response.body.message).toMatch("No document file uploaded");
    expect(response.type).toBe("application/json");
  });

  test("test inverse endpoint when a wrong file format", async () => {
    const response = await request(app)
      .post("/inverse")
      .attach("file", filePathWrong);
    expect(response.body.status).toBe(406);
    expect(response.body.message).toMatch("Invalid document file type");
    expect(response.type).toBe("application/json");
  });
  test("test inverse endpoint for invalid csv input", async () => {
    const response = await request(app)
      .post("/inverse")
      .attach("file", invalidCsv);
    expect(response.body.status).toBe(422);
    expect(response.body.message).toMatch("Invalid csv input");
    expect(response.type).toBe("application/json");
  });
});
