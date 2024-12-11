import { test, expect } from '@playwright/test';

test("demo todo test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await page.getByPlaceholder("What needs to be done?").click();
  await page.getByPlaceholder("What needs to be done?").click();
  await page
    .getByPlaceholder("What needs to be done?")
    .fill("water the plants");
  await page.getByPlaceholder("What needs to be done?").press("Enter");
  await page.getByPlaceholder("What needs to be done?").fill("feed the dog");
  await page.getByPlaceholder("What needs to be done?").press("Enter");
  await page
    .locator("li")
    .filter({ hasText: "water the plants" })
    .getByLabel("Toggle Todo")
    .check();
  await page.locator("html").click();
  await page
    .locator("li")
    .filter({ hasText: "feed the dog" })
    .getByLabel("Toggle Todo")
    .check();
  await page.getByRole("link", { name: "Completed" }).click();
  await page.getByText("water the plants").click();
  await expect(page.locator("body")).toContainText("water the plants");
  await expect(page.getByText("water the plants")).toBeVisible();
});
