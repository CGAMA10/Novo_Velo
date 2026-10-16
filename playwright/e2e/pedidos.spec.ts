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
//Act
  await page.getByTestId('search-order-button').click();
//Assert
  await expect(page.getByTestId('order-result-id')).toBeVisible();
//Assert
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-9TKQMM');
  //Assert
  await expect(page.getByTestId('order-result-status')).toBeVisible();
  //Assert
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');

})