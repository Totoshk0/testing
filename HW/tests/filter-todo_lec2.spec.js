import { test, expect } from "@playwright/test";

test("filter todo by completion status", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  // Добавляем задачи
  const input = page.getByPlaceholder("What needs to be done?");
  await input.fill("Сделать задания по тестированию");
  await input.press("Enter");
  await input.fill("Отдохнуть");
  await input.press("Enter");

  // Проверяем добавление
  const todoList = page.locator(".todo-list");
  const todoItems = todoList.getByRole("listitem");
  await expect(todoItems).toHaveCount(2);

  // Завершаем первую задачу
  const firstTodo = todoItems.filter({
    hasText: "Сделать задания по тестированию",
  });
  await firstTodo.getByRole("checkbox").check();
  await expect(firstTodo).toHaveClass(/completed/);

  // Фильтруем по Completed и проверяем
  await page.getByRole("link", { name: "Completed" }).click();

  await page.waitForTimeout(1000);

  // Проверяем видимые элементы
  const visibleTodos = todoList.getByRole("listitem").filter({
    has: page.locator(':not([style*="display: none"])'),
  });

  await expect(visibleTodos).toHaveCount(1);
  await expect(visibleTodos).toHaveText("Сделать задания по тестированию");

  // Проверяем активные задачи
  await page.getByRole("link", { name: "Active" }).click();
  await page.waitForTimeout(1000);

  const activeTodos = todoList.getByRole("listitem").filter({
    has: page.locator(':not([style*="display: none"])'),
  });

  await expect(activeTodos).toHaveCount(1);
  await expect(activeTodos).toHaveText("Отдохнуть");

  // Проверяем все задачи
  await page.getByRole("link", { name: "All" }).click();
  await page.waitForTimeout(1000);

  const allTodos = todoList.getByRole("listitem");
  await expect(allTodos).toHaveCount(2);
});
