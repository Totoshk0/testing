import { test, expect } from "@playwright/test";
import TodoMVCPage from "../pages/TodoMVCPage.js";

test("should add, complete and delete todo using POP", async ({ page }) => {
  const todoPage = new TodoMVCPage(page);

  await todoPage.goto();

  await todoPage.addTodo("Write Code");

  const todoItem = todoPage.getTodoItem("Write Code");
  await expect(todoItem).toBeVisible();

  expect(await todoPage.getTodoCount()).toBe(1);

  await todoPage.completeTodo("Write Code");

  await expect(todoItem).toHaveClass("completed");

  await todoPage.deleteTodo("Write Code");

  await expect(todoItem).not.toBeVisible();

  expect(await todoPage.getTodoCount()).toBe(0);
});

test("should work with multiple todos using POP", async ({ page }) => {
  const todoPage = new TodoMVCPage(page);
  await todoPage.goto();

  await todoPage.addTodo("Task 1");
  await todoPage.addTodo("Task 2");
  await todoPage.addTodo("Task 3");

  await expect(todoPage.getTodoItem("Task 1")).toBeVisible();
  await expect(todoPage.getTodoItem("Task 2")).toBeVisible();
  await expect(todoPage.getTodoItem("Task 3")).toBeVisible();

  expect(await todoPage.getTodoCount()).toBe(3);

  await todoPage.completeTodo("Task 1");
  await expect(todoPage.getTodoItem("Task 1")).toHaveClass("completed");

  await todoPage.deleteTodo("Task 2");
  await expect(todoPage.getTodoItem("Task 2")).not.toBeVisible();
});
