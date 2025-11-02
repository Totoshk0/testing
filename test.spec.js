await page.getByRole('button', { name: 'Open'}).click()
await page.getByText('Open').dbclick()
await page.getByText('Open').click({button: 'right'})
await page.getByText('Open').click({modifiers: ['shift']})

await page.getByText('Open').click({force: ['true']})


await page.getByRole('textbox').fill('Some text')

test('sdf',  async () => {
    await page.getByLable('Согласен на ...').click()
        await page.getByLable('Согласен на ...').unclick()

    await expect(page.getByLable('Согласен на ...')).toBeChacked()
})


await page.getByLable('option 1').selectOption('google')
await page.getByLable('option 2').selectOption({label: 'Google'})
await page.getByLable('option 3').selectOption('google', 'yandex')


await page.getByText('send').press('Enter', 'Shift+a')

await page.getByRole('textbox').focus()

await page.getByRole('textbox').blur()

