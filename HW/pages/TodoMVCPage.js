export default class TodoMVCPage {
  constructor(page) {
    this.page = page;
    this.input = page.getByPlaceholder("What needs to be done?");
    this.todoList = page.locator(".todo-list");
  }

  async goto() {
    await this.page.goto("https://demo.playwright.dev/todomvc/");
  }

  async addTodo(taskName) {
    await this.input.fill(taskName);
    await this.input.press("Enter");
  }

  getTodoItem(taskName) {
    return this.todoList.locator("li").filter({ hasText: taskName });
  }

  async completeTodo(taskName) {
    const todoItem = this.getTodoItem(taskName);
    await todoItem.getByRole("checkbox").check();
  }

  async deleteTodo(taskName) {
    const todoItem = this.getTodoItem(taskName);

    await todoItem.hover();

    await todoItem.locator(".destroy").click();
  }

  async getTodoCount() {
    return await this.todoList.locator("li").count();
  }

  async getVisibleTodo() {
    return this.todoList.locator('li:not([style*="display: none"])');
  }
}
