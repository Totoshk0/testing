import { test, expect } from "@playwright/test";

test("Todo test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");

  const input = page.getByPlaceholder("What needs to be done?");
  await input.fill("Write Code");
  await input.press("Enter");

  await input.fill("Test App");
  await input.press("Enter");

  await expect(page.getByText("Write Code")).toBeVisible();
  await expect(page.getByText("Test App")).toBeVisible();

  const firstTodo = page
    .locator(".todo-list li")
    .filter({ hasText: "Write Code" });
  await firstTodo.getByRole("checkbox").check();

  await expect(firstTodo).toHaveClass("completed");
});
