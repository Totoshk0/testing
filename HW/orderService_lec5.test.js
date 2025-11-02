import { createOrder } from "./orderService";
import { saveOrder } from "./db";

// Мокаем весь модуль db
jest.mock("./db");

describe("LEC 5 createOrder function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Должен создать заказ orderId = 1", async () => {
    saveOrder.mockResolvedValue(true);
    const orderId = 1;

    const result = await createOrder(orderId);

    expect(result).toEqual({ orderId: 1, saved: true });
    expect(saveOrder).toHaveBeenCalledWith(1);
  });

  test("Должен выдать ошибку при saveOrder", async () => {
    saveOrder.mockResolvedValue(false);
    const orderId = 2;

    await expect(createOrder(orderId)).rejects.toThrow("Failed to save order");
    expect(saveOrder).toHaveBeenCalledWith(2);
  });

  test("Вызываем saveOrder с правильным orderId", async () => {
    saveOrder.mockResolvedValue(true);
    const testOrderId = 123;

    await createOrder(testOrderId);

    expect(saveOrder).toHaveBeenCalledWith(123);
    expect(saveOrder).toHaveBeenCalledTimes(1);
  });
});
