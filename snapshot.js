require('dotenv').config()
const SitemapGenerator = require('sitemap-generator');
const fs = require('fs')

const website = ""

//Use only if you need basic auth to access your website
const username = ""
const password = ""

module.exports = async () => {
    return new Promise((resolve) => {
        // start the crawler
        const urls = []
        const errors = []

        // create generator
        const generator = SitemapGenerator(website, {
            // Modify these options as per your requirements
            stripQuerystring: true,
            respectRobotsTxt: false,
            allowInitialDomainChange: true,
            needsAuth:username&&password,
            authPass:username,
            authPass:password,
        });

        //Add Urls to list
        generator.on('add', (url) => {
            // Note: You can pass more options here as mentioned on https://docs.percy.io/docs/percy-snapshot#configuration
            urls.push({url})
        })

        // register event listeners
        generator.on('done', () => {
            fs.writeFileSync('errors.json', JSON.stringify(errors))
            resolve(urls)
        });

        //Add Errors to Errors List
        generator.on('error', (error) => {
            errors.push(error)
        });

        generator.start();
    })
}