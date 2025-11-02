import { test, expect } from "module";

test('test'), async ({page}) => {
    await page.goto('https')
    const input = page.getByPlaceholder('what ...')
    const taskName = "complite"
    await input.fill(taskName)
    await input.press('Enter')
    const checkbox = page.getByTestId('todo-item').filter({hasText: taskName}).locator('input[type="checkbox"]')
    await checkbox.checkbox.check()
    await page.getByRole('link', {name: 'Complited'}).click()
    await expect(page.getByTestId('todo-item').filter({hasText: taskName}).toBeVisible())

}


const isComplited = false
expect(isComplited).toBe(false)

expect('TodoMVC').toContain('MVC')

expect({title: 'TodoMVC'}).toEquel({title: 'TodoMVC'})


const pageTitle = await page.evalute(() => document.title)
expect(pageTitle).toBe('TodeMVC')

toContainText()
tyoHaveValue()
toBeChecked()
toHaveAttribute()
toHaveClass()
toHaveCount()


test('test'), async ({page}) => {
    await page.goto('https')
    const input = page.getByPlaceholder('what ...')
    const taskName = "complite"
    await input.fill(taskName)
    await input.press('Enter')
    const todoItem = page.getByTestId('todo-item').filter({has: taskName})

    await expect(todoItem).toBeVisible()
    await expect(todoItem).toContainText(taskName)
    await expect(page.getByTestId('todo-count')).toHaveCount(1)

    const chackbox = todoItem.locator('input[type="checkbox"]')
    await chackbox.check()
    await expect (chackbox).toBeChecked()
    await expect(page.getByTestId('todo-Item').filter({hasText: 'learn...'}).toHaveClass(/complited/))
}

test('shot', async ({page}) => {
    await page.goto('https')
    const input = page.getByPlaceholder('what ...').fill('some text')
    await page.getByPlaceholder('fvjhewbd').press('Enter')

    await expect(page).toHaveScreenshot('../', {maxDiffPixels: 100})
})