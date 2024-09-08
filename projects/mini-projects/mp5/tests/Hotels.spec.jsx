import { test, expect } from '@playwright/test';



test.describe('E2E', () => {
  test.beforeEach(async ({ page }) => {});

  test('opens the app and clicks on a hotel', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('a').first().click();
    await expect(page).toHaveURL(/\/hotel/);
  });

  test('navigates to the form to add a review', async ({ page }) => {
    await page.locator('[data-cy=addReview]').click();
    await expect(page).toHaveURL(/\/new/);
  });

  test('fills in and submits the form', async ({ page }) => {
    const scope = page.locator('form');
    await scope.locator('input[name=title]').fill('Test review');
    await scope
        .locator('input[name=description]')
        .fill('Is a test review by Playwright');
    await scope.locator('input[name=rating]').fill(4);
    await scope.locator('button').click();
  });

  test('and verifies if the review is added', async ({ page }) => {
    await expect(
        page
            .locator('h3')
            .getByText(/Test review/)
            .first()
    ).toBeVisible();
    await expect(
        page
            .locator('div')
            .getByText(/Is a test review by Cypress/)
            .first()
    ).toBeVisible();
  });
});
