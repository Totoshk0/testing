import { restrictLength } from "./utils.js";

describe("lec 4 restrictLength function", () => {
  describe("Проверка обрезки строки", () => {
    test.each([
      {
        input: "Hello World",
        maxLength: 5,
        expected: "Hello...",
        description: "long string with truncation",
      },
      {
        input: "Test",
        maxLength: 10,
        expected: "Test",
        description: "short string without truncation",
      },
      {
        input: "JavaScript",
        maxLength: 4,
        expected: "Java...",
        description: "string exactly at truncation point",
      },
      { input: "", maxLength: 5, expected: "", description: "empty string" },
      {
        input: "Short",
        maxLength: 5,
        expected: "Short",
        description: "string equal to max length",
      },
      {
        input: "Very Long String",
        maxLength: 8,
        expected: "Very Lon...",
        description: "string with spaces",
      },
    ])(
      "Для входного значения  $description выбрасывает ошибку",
      ({ input, maxLength, expected }) => {
        const testString = input;
        const testMaxLength = maxLength;

        const result = restrictLength(testString, testMaxLength);

        expect(result).toBe(expected);
      }
    );
  });

  describe("Проверка ошибок для нестроковых", () => {
    test.each([
      { input: 123, maxLength: 5, description: "number input" },
      { input: null, maxLength: 10, description: "null input" },
      { input: undefined, maxLength: 3, description: "undefined input" },
      { input: {}, maxLength: 5, description: "object input" },
      { input: [], maxLength: 2, description: "array input" },
      { input: true, maxLength: 4, description: "boolean input" },
    ])("Ошибка при значении $description", ({ input, maxLength }) => {
      const invalidInput = input;
      const testMaxLength = maxLength;

      expect(() => restrictLength(invalidInput, testMaxLength)).toThrow(
        "Input must be a string"
      );
    });
  });
});
