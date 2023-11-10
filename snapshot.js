const fetch = require('node-fetch')

module.exports = async () => {
    return fetch(`${process.env.WEBSITE}/sitemap.xml`).then(async (res) => {
        const xml = await res.text()
        let urls = xml.match(/(?<=<loc>)(.*?)(?=<\/loc>)/ig) ?? [];
        return urls.filter((url, i) => {
            let match = urls.indexOf(url.replace(/\/$/, ''));
            return match === -1 || match === i;
        }).map((url)=>{
            return {
                url,
                waitForTimeout: 2000,
                execute:"window.scrollTo(0, document.body.scrollHeight);"
                //Other Per Snapshot Config
            }
        });
    })
}