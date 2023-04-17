const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to LeetCode login page
  await page.goto('https://leetcode.com/accounts/login/');

  // Fill in the email and password fields
  await page.type('#id_login', 'your_email@example.com');
  await page.type('#id_password', 'your_password');

  // Click on the submit button
  await Promise.all([
    page.waitForNavigation(),
    page.click('button[type="submit"]'),
  ]);

  // Get the CSRF token and session cookie
  const csrfToken = (await page.cookies()).find(cookie => cookie.name === 'csrftoken').value;
  const session = (await page.cookies()).find(cookie => cookie.name === 'LEETCODE_SESSION').value;

  console.log('CSRF Token:', csrfToken);
  console.log('Session:', session);

  await browser.close();
})();

const axios = require('axios');

async function updateGitHubSecret(secretName, secretValue) {
  const token = 'YOUR_GITHUB_TOKEN';
  const owner = 'OWNER';
  const repo = 'REPO';

  const url = `https://api.github.com/repos/${owner}/${repo}/actions/secrets/${secretName}`;

  const publicKeyResponse = await axios.get(`${url}/public-key`, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
    },
  });

  const { key_id: keyId, key: publicKey } = publicKeyResponse.data;

  // Encrypt the secret value using the public key
  const encryptedValue = encrypt(secretValue, publicKey);

  // Update the secret
  await axios.put(
    url,
    {
      encrypted_value: encryptedValue,
      key_id: keyId,
    },
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github+json',
      },
    }
  );
}

await updateGitHubSecret('LEETCODE_CSRF_TOKEN', csrfToken);
await updateGitHubSecret('LEETCODE_SESSION', session);

