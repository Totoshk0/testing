import { calculateDiscount } from "./math";

describe("LEC 8 calculateDiscount function", () => {
  test("Ошибка для нечислового amount", () => {
    const amount = "invalid";
    const customerType = "regular";

    expect(() => calculateDiscount(amount, customerType)).toThrow(
      "Amount must be a number"
    );
  });

  test("Ошибка для нестрокового customerType", () => {
    const amount = 100;
    const customerType = 123;

    expect(() => calculateDiscount(amount, customerType)).toThrow(
      "Customer type must be a string"
    );
  });

  test("Нулевая скидка для отрицательного значения", () => {
    const amount = -50;
    const customerType = "regular";

    const result = calculateDiscount(amount, customerType);

    expect(result).toBe(0);
  });

  describe("Скидка для разных типов клиентов", () => {
    test.each([
      {
        amount: 100,
        customerType: "regular",
        expected: 10,
        description: "regular customer",
      },
      {
        amount: 100,
        customerType: "premium",
        expected: 20,
        description: "premium customer",
      },
      {
        amount: 100,
        customerType: "unknown",
        expected: 0,
        description: "unknown customer type",
      },
    ])(
      "Возвращает $expected при $description и значении $amount",
      ({ amount, customerType, expected }) => {
        const inputAmount = amount;
        const inputCustomerType = customerType;

        const result = calculateDiscount(inputAmount, inputCustomerType);

        expect(result).toBe(expected);
      }
    );
  });
});
