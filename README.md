# Scriptless Percy

scriptless-percy allows you to auto-generate sitemap for your web application at runtime and integrates with Percy sitemaps feature to achieve visual comparison of your static sitemap pages end to end. 

## Installation

- Install Node Dependencies

```sh

npm install

```

- Create a `.env` and Add your percy token & and branch to it
```shell
PERCY_BRANCH=<branch-name>
PERCY_TOKEN=<percy-token>
```

- Run your test
WEBSITE=https://percy.io npx percy snapshot snapshot.js

note: this assumes your sitemap is located on https://percy.io/sitemap.xml