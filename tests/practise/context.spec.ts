import { test } from '@playwright/test';

test('Simulate multiple users logging in', async ({ browser }) => {
  // Create two separate browser contexts
  const user1Context = await browser.newContext();
  const user2Context = await browser.newContext();

  // Create pages in each context
  const user1Page = await user1Context.newPage();
  const user2Page = await user2Context.newPage();

  // Simulate User 1 logging in
  await user1Page.goto('https://www.amazon.in/');
//   await user1Page.fill('#username', 'user1');
//   await user1Page.fill('#password', 'password1');
//   await user1Page.click('#login');
//   console.log('User 1 logged in');

  // Simulate User 2 logging in
  await user2Page.goto('https://www.flipkart.com/');
//   await user2Page.fill('#username', 'user2');
//   await user2Page.fill('#password', 'password2');
//   await user2Page.click('#login');
//   console.log('User 2 logged in');

  // Close contexts
  await user1Context.close();
  await user2Context.close();
});