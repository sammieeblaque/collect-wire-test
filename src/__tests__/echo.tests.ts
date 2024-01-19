import { add } from "../utils";

describe("a functions adds correctly", () => {
  test("add two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
