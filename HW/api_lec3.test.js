import { fetchPost } from "./api.js";

describe("LEC 3 fetchPost", () => {
  test("успешно получает id = 1", async () => {
    const result = await fetchPost(1);
    expect(result).toEqual({ id: 1, title: "First Post" });
  });

  test("Ошибка для неизвестного id", async () => {
    await expect(fetchPost(2)).rejects.toThrow("Post not found");
  });

  test("проверяет длину свойства title", async () => {
    const result = await fetchPost(1);
    expect(result.title).toHaveLength(10); // 'First Post' имеет 10 символов
  });
});
