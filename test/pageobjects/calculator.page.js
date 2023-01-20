const Page = require('./page');

class CalculatorPage extends Page {
    get frame() { return $('//iframe[@name="goog_1598225198"]')}
    
    async activateComputeEngine() {
        await $('(//div[@title="Compute Engine"])[1]').click();
      }

    async inputNumberOfInstances(num) {
        await $('//input[@ng-model="listingCtrl.computeServer.quantity"]').setValue(num);
    }

    async inputInstancesText(text) {
        await $('//input[@ng-model="listingCtrl.computeServer.label"]').addValue(text);
    }

    async selectOperatingSystem(os) {
        await $('//md-select[@ng-model="listingCtrl.computeServer.os"]').click()
        await browser.pause(500); // need for stability
        await $(`md-option[value="${os}"] div:nth-child(1)`).click()
    }

    async selectVMclass(vm_class) {
        await $('//md-select[@placeholder = "VM Class"]').click();
        await browser.pause(500); // need for stability
        await $(`md-option[value="${vm_class}"] div:nth-child(1)`).click();
    }

    async selectSeries(series) {
        await $("//md-select[@placeholder = 'Series']").click();
        await browser.pause(500); // need for stability
        await $(`md-option[value="${series}"] div:nth-child(1)`).click();
    }

    async selectInstanceType(ram) {
        await $('md-select[placeholder="Instance type"]').click();
        await browser.pause(500); // need for stability
        await $(`//md-option[contains(., '${ram}')]`).click();
    }

    async selectAddGPus() {
        await $('//md-checkbox[@ng-model="listingCtrl.computeServer.addGPUs"]').click();
    }

    async selectGPUType(type) {
        await $('//md-select[@placeholder = "GPU type"]').click();
        await browser.pause(500); // need for stability
        await $(`//md-option[@value="${type}"]`).click();
    }

    async selectNumberOfGPUs() {
        await $('//md-select[@placeholder="Number of GPUs"]').click();
        await browser.pause(500); // need for stability
        await $(`//md-option[@id="select_option_613"]'[@value="${num}"]`).click();
    }

    async selectLocalSSD(ssd) {
        await $('//md-select[@placeholder = "Local SSD"]').click();
        await browser.pause(500); // need for stability
        await $(`//md-option[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"]//div[contains(.,"${ssd}")]`).click();
    }

    async selectDatacenter(center) {
        await $('//md-select[@placeholder = "Datacenter location"]').click();
        await browser.pause(500); // need for stability
        await $(`//md-option[@ng-repeat="item in listingCtrl.fullRegionList | filter:listingCtrl.inputRegionText.computeServer"]//div[contains(.,"${center}")]`).click();
    }

    async selectCommitedUsage() {
        await $('//md-select[@placeholder = "Committed usage"]').click();
        await browser.pause(500); // need for stability
        await $('//*[@id="select_option_129"]').click();
        //await $('//md-select[@placeholder="Committed usage"]//md-option[@ng-value="1" and contains(.,"1 Year")]').click();
    }

    async clickAddToEstimateBtn() {
        await browser.pause(500); // need for stability
        await $('//form[@name="ComputeEngineForm"]//button[@aria-label="Add to Estimate"]').click();
    }

    async checkResultBlockIsDisplayed() {
        return await $('//md-card-content[@id="resultBlock"]');
    }

    async getTextFromRegion() {
        return await $('//md-list-item[1]').getText(); 
    }
    
    async getTextFromCommitmentTerm() {
        return await $('//md-list-item[3]').getText();
    }

    async getTextFromProvisioningModel() {
        return await $('//md-list-item[4]').getText();
    }
    
    async getTextFromInstanceType() {
        return await $('//md-list-item[5]/div[1]').getText();
    }

    async getTextFromOperatingSystem() {
        return await $('//md-list[1]/md-list-item[6]').getText();
    }

    async getTextFromLocalSSD() {
        return await $('//md-list[2]/md-list-item[8]').getText();
    }

    async clickEmailEstimateBtn() {
        await $('//button[@id="Email Estimate"]').click();
    }

    async inputEmail(email) {
        await browser.pause(500); // need for stability
        await $('//form[@name="emailForm"]//input[@ng-model="emailQuote.user.email"]').addValue(email);   
    }

    async inputLastName(lastName) {
        await browser.pause(500); // need for stability
        await $('//*[@id="input_1022"]').click();
        await browser.pause(500); // need for stability
        await $('//*[@id="input_1022"]').addValue(lastName);
    }

    async clickSendEmailBtn() {
        await browser.pause(500); // need for stability
        await $('(//button[contains(.,"Send Email")])[1]').click();
    }

    async clickCancelBtn() {
        await $('//button[@aria-label="Cancel"]').click();
    }

    open () {
        return super.open('products/calculator');
    }
}

module.exports = new CalculatorPage();
