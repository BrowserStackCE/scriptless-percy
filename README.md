# Scriptless Percy

scriptless-percy allows you to auto-generate sitemap for your web application at runtime and integrates with Percy sitemaps feature to achieve visual comparison of your static sitemap pages end to end. 

## Installation

- Install Node Dependencies

```sh

npm install

```

- Export Percy Token

```
//MacOS or Linux

export PERCY_TOKEN=<Your Percy Token>

//Windows

set PERCY_TOKEN=<Your Percy Token>

```

- Add your website to snapshot.js

```js

const website = "<Your website Url>"

//Use only if you need basic auth to access website
const username = "<Your Basic Auth Username>"
const password = "<Your Basic Auth Password>"

```

- Run the code

```
npm run percy
```

## Disclaimer
This Repo is dependant on third party package ```sitemap-generator```. 
Browserstack does not own or manage this package. 
