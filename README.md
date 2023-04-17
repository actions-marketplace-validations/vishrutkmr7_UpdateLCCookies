# LeetCode Cookies Updater

<!-- ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vishrutkmr7/UpdateLCCookies/Update%20Leetcode%20Cookies)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/vishrutkmr7/UpdateLCCookies)
![GitHub](https://img.shields.io/github/license/vishrutkmr7/UpdateLCCookies) -->

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
        uses: vishrutkmr7/UpdateLCCookies@v1.0.0
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          leetcode-email: ${{ secrets.LEETCODE_EMAIL }}
          leetcode-password: ${{ secrets.LEETCODE_PASSWORD }}
```

### Required Secrets

You need to set the following secrets in your GitHub repository:

- `GITHUB_TOKEN`: A GitHub token with the `repo` scope. [Learn how to create a Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
- `LEETCODE_EMAIL`: Your LeetCode account email.
- `LEETCODE_PASSWORD`: Your LeetCode account password.

To add the secrets:

1. Go to the main page of your repository on GitHub.
2. Click on the "Settings" tab.
3. In the left sidebar, click on "Secrets".
4. Click on the "New repository secret" button and add the `GITHUB_TOKEN`, `LEETCODE_EMAIL`, and `LEETCODE_PASSWORD` secrets one by one with the corresponding values.

## Contributing

We welcome contributions to the LeetCode Cookies Updater! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). The full text of the license can be found at <https://choosealicense.com/licenses/mit/>.
