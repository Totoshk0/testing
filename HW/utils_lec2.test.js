import { processData } from "./utils";
describe("LEC 2 processData fn", () => {
  test("status: pass", () => {
    const name = "alice";
    const score = 51;
    const res = processData({ name, score });
    expect(res).toHaveProperty("status", "pass");
  });
  test("status: fail", () => {
    const name = "alice";
    const score = 49;
    const res = processData({ name, score });
    expect(res).toHaveProperty("status", "fail");
  });
  test("Error", () => {
    const name = 123;
    const score = 60;
    expect(() => processData({ name, score })).toThrow("У тебя проблемы");
  });
  test("", () => {
    const name = "alice";
    const score = 51;
    const res = processData({ name, score });
    expect(Object.keys(res)).toHaveLength(3);
    expect(res).toHaveProperty("name");
    expect(res).toHaveProperty("score");
    expect(res).toHaveProperty("status");
  });
});
