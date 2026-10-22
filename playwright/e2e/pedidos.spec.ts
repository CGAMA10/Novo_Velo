import { test, expect } from '@playwright/test';

///AAA - Arrange, Act, Assert Preparar, Agir, Assertar


test('deve consultar um pedido aprovado', async ({ page }) => {

  //Arrange
  await page.goto('http://localhost:5173/');

  

  //Checkpoint
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
//Act
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  //Checkpoint
  await expect(page.getByTestId('header-nav')).toContainText('Consultar Pedido');
//Act
  await page.getByTestId('search-order-id').fill('VLO-9TKQMM');

  //await page.locator('//label[text()="Numero do Pedido"]/..//input').fill('VLO-367413');
 // await page.getByRole('textbox', { name: 'Numero do Pedido' }).fill('VLO-367413');
  //await page.getByPlaceholder('Ex: VLO-ABC123').fill('VLO-367413');

  //await page.getByLabel('Numero do Pedido').fill('VLO-367413');
//Act
  await page.getByTestId('search-order-button').click();
//Assert
  await expect(page.getByTestId('order-result-id')).toBeVisible({ timeout: 10_000 });
//Assert
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-9TKQMM');
  //Assert
  await expect(page.getByTestId('order-result-status')).toBeVisible();
  //Assert
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');

})