import { test, expect } from "@playwright/test";
import TodoMVCPage from "../pages/TodoMVCPage.js";

test("should add, complete and delete a todo", async ({ page }) => {
  const todoPage = new TodoMVCPage(page);
  await todoPage.goto();

  const taskName = "Write Code";
  await todoPage.addTodo(taskName);


  const todoItem = todoPage.getTodoItem(taskName);
  await expect(todoItem).toBeVisible();


  await todoPage.completeTodo(taskName);
  await expect(todoItem).toHaveClass(/completed/);


  await todoPage.deleteTodo(taskName);
  await expect(todoItem).not.toBeVisible();
});
