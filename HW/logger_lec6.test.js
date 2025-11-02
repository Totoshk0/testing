import { logMessage } from "./logger";

describe("LEC 6 logMessage function", () => {
  let consoleLogSpy;

  // Создаем шпиона
  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });

  // Очищаем шпионов
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("вызов консоли и вход в систему", () => {
    const message = "Hello World";

    const result = logMessage(message);

    expect(consoleLogSpy).toHaveBeenCalledWith("Message: Hello World");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe("Logged: Hello World");
  });

  test("Вызов пустой консоли", () => {
    const message = "";

    const result = logMessage(message);

    expect(consoleLogSpy).toHaveBeenCalledWith("Empty message");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe("Error: No message");
  });

  test("Имитируем консоль с префиксом Test", () => {
    const message = "Test message";
    consoleLogSpy.mockImplementation((msg) => `Test: ${msg}`);

    const result = logMessage(message);

    expect(consoleLogSpy).toHaveBeenCalledWith("Message: Test message");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe("Logged: Test message");
    expect(consoleLogSpy.mock.calls[0][0]).toBe("Message: Test message");
  });
});
