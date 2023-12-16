const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://ativayloanev-exam-shopping-list-ivaylo.onrender.com'); 
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  