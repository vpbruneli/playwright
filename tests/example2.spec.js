// @ts-check
import { test, expect } from '@playwright/test';


test('Login realizado com sucesso', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')


  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()
  await texto.click()

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/passwordelement.png' });
  await page.screenshot({ path: 'screenshot/screenshot.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

