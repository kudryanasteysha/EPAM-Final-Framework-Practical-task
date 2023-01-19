const Page = require('./page');

class MainPage extends Page {

   async fillOutSearchInput(text) {
     await $('input[aria-label="Search"]').click();
     await $('input[aria-label="Search"]').addValue(text);
   }

   async clickSearchResult() {
     await $('(//a[contains(.,"Google Cloud Pricing Calculator")])[1]').click();
   }

   async switchToFrame() {
    await browser.switchToFrame(await $('iframe[src *= "https://cloud.google.com/frame"]'))
    const FILLOUTFORM_PATH = '#myFrame'; 
    const frame = await browser.$(FILLOUTFORM_PATH);
    await browser.switchToFrame(frame);
   }

    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
