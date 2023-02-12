# vite-library-starter

This is a template repository for Node.js libraries. It has been configured with:

- [vite](https://vitejs.dev/) - bundling
- [vitest](https://vitest.dev/) - testing
- [typescript](https://www.typescriptlang.org/docs/) - typing
- [eslint](https://eslint.org/) - linting
- [prettier](https://prettier.io/) - formatting
- [github actions](https://docs.github.com/en/actions) - deploying

Please read the docs for each for any customizations you need.

## Setup

### Step 1: Setup new repository

Click [**Use this template** → **Create new repository**](https://github.com/smonn/vite-library-starter/generate) and follow the prompts. Then clone the new repository to your computer.

### Step 2: Change `name` in `package.json`

Locally, edit `package.json` and replace the `name` with your own package name. This can either include a scope, e.g. `@scope/package-name`, or omit it, e.g. `package-name`. Commit the changes and push the commit. It's usually safes to include a scope to ensure the package name is not taken.

### Step 3: Configure `.github/workflows/cd.yml`

In your new repository on GitHub, click **Settings** → **Secrets and variables** → **Actions**. Here, add new secrets for:

- `GIT_NAME` - the name Git should use when bumping the version number. I typically set it to "Publish Bot"
- `GIT_EMAIL` - the email Git should use, typically the same email as your GitHub account.
- `NPM_TOKEN` - the npm access token to publish the library. You get this from your [npmjs.com](https://www.npmjs.com/) account.

### Step 4: Update `README.md`

Update this file with some documentation for your library.

### Step 5: Update `LICENSE`

The default license is the MIT license, but feel free to adjust to your needs. At minimum update the year, if needed, and set `<copyright holders>` to your name or organization.

## Usage

### Day-to-day

The typical. Create a feature branch, commit some changes, make a PR, have checks pass, merge.

### Release new version

Create a new release with a [semver](https://semver.org/) tag. Use the auto-generate feature to have all PR titles listed.
