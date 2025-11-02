import { truncateString } from "./truncateString";

describe("LEC 9 truncateString function", () => {
  test.each([
    {
      input: "hello",
      limit: 10,
      expected: "hello",
      description: "shorter string",
    },
    {
      input: "hello world",
      limit: 5,
      expected: "hello...",
      description: "longer string",
    },
    { input: "", limit: 5, expected: "", description: "empty string" },
    {
      input: "test",
      limit: 4,
      expected: "test",
      description: "string equal to limit",
    },
    {
      input: "javascript",
      limit: 0,
      expected: "...",
      description: "zero limit",
    },
    {
      input: "hello world",
      limit: 7,
      expected: "hello w...",
      description: "string with spaces",
    },
    {
      input: "a".repeat(100),
      limit: 50,
      expected: "a".repeat(50) + "...",
      description: "very long string",
    },
  ])("Кореектная отработка $description", ({ input, limit, expected }) => {
    expect(truncateString(input, limit)).toBe(expected);
  });
});
