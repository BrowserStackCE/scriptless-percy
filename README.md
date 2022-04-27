# Scriptless Percy

Sometimes websites are static in nature and to be able capture snapshot of different pages on website using percy without writing a piece of code the sitemaps can be used. Percy by default supports [sitemaps](https://docs.percy.io/docs/cli-snapshot#commands). In case you don't have sitemaps on your websites and still want to use percy without mentioning any url by yourself then this repo can be useful. 

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