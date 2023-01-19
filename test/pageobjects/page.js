module.exports = class Page {

    open (path) {
        return browser.url(`https://cloud.google.com/${path}`)
    }
}
