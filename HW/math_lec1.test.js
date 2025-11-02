import { divide } from "./math";

describe("LEC 1 divide  fn", () => {
  test("Division", () => {
    expect(divide(6, 2)).toBe(3);
    expect(() => divide(6, 0)).toThrow("Division by zero");
    expect(divide(-6, 2)).toBe(-3);
  });
});
