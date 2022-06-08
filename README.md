# `setup-stacc-cli`

> Sets up the Stacc CLI for GitHub Actions runners.

## About

This action sets up the Stacc CLI, [`stacc`](https://github.com/stacc/cli-next), on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `stacc` CLI on the runner environment.

## Usage

Setup the `stacc` CLI:

```yaml
steps:
- uses: stacc/setup-stacc-cli
```

A specific version of the `stacc` CLI can be installed:

```yaml
steps:
- uses: stacc/setup-stacc-cli
  with:
    version:
      0.6.0
```

## Inputs

The actions supports the following inputs:

- `version`: The version of `stacc` to install, defaulting to `0.7.8`

## Authentication

To authenticate with the `stacc` CLI, you must provide the following environment variables:

- `CLIENT_ID`: Client ID
- `CLIENT_SECRET`: Client secret

Example job:

```yaml
jobs:
  login:
    runs-on: ubuntu-latest
    env:
      CLIENT_ID: ${{ secrets.MY_CLIENT_ID }}
      CLIENT_SECRET: ${{ secrets.MY_CLIENT_SECRET }}
    steps:
      - name: Setup stacc
        uses: stacc/setup-stacc-cli@v1
      - name: stacc login
        run: |
          stacc login -u "$CLIENT_ID" -p "$CLIENT_SECRET"
```

## License

[MIT](LICENSE).
