# LeetCode Cookies Updater

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/your-github-username/leetcode-cookies-updater/Update%20Leetcode%20Cookies)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/your-github-username/leetcode-cookies-updater)
![GitHub](https://img.shields.io/github/license/your-github-username/leetcode-cookies-updater)

**LeetCode Cookies Updater** is a GitHub Action that automatically updates LeetCode CSRF token and session cookie values in your GitHub repository secrets every 2 weeks. This is useful for keeping your LeetCode syncing workflows running without manual intervention.

## Usage

Add the following workflow to your repository in the `.github/workflows` directory:

```yaml
name: Update Leetcode Cookies

on:
  schedule:
    - cron: "0 0 */14 * *" # Run every 2 weeks

jobs:
  update_cookies:
    runs-on: ubuntu-latest

    steps:
      - name: Update Leetcode cookies
        uses: your-github-username/leetcode-cookies-updater@v1.0.0
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          leetcode-email: ${{ secrets.LEETCODE_EMAIL }}
          leetcode-password: ${{ secrets.LEETCODE_PASSWORD }}
```
