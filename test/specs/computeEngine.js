const CalculatorPage = require('../pageobjects/calculator.page')
const MainPage = require('../pageobjects/main.page')

describe('Fill out the Compute Engine form', () => {
    it('should add to estimate (Hurt Me Plenty)', async () => {
        const series = 'n1';
        const instanceType = '30GB';
        const os = 'free'
        const vm_class = 'regular'; 
        const ssd = '2x375 GB';
        const GPUtype = 'NVIDIA_TESLA_P100'
        const num = '1';
        const center = 'Frankfurt (europe-west3)';
        const year = '1 Year';

        const region = 'Region: Frankfurt';

        await MainPage.open();
        await MainPage.fillOutSearchInput('Google Cloud Platform Pricing Calculator');
        await browser.keys('Return');
        await MainPage.clickSearchResult();
        await MainPage.switchToFrame();

        await CalculatorPage.activateComputeEngine();  
        await CalculatorPage.inputNumberOfInstances(4); // 4
        await CalculatorPage.inputInstancesText('leave blank'); // leave blank
        await CalculatorPage.selectOperatingSystem(os); // Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
        await CalculatorPage.selectVMclass(vm_class); // regular
        await CalculatorPage.selectSeries(series); // N1
        await CalculatorPage.selectInstanceType(instanceType); // n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await CalculatorPage.selectAddGPus();
        await CalculatorPage.selectGPUType(GPUtype); 
        await CalculatorPage.selectLocalSSD(ssd); // 2x375 Gb
        await CalculatorPage.selectDatacenter(center); // Frankfurt (europe-west3)
        await CalculatorPage.selectCommitedUsage(); // 1 Year
        await CalculatorPage.clickAddToEstimateBtn();

        expect(await CalculatorPage.checkResultBlockIsDisplayed()).toBeDisplayed();
        expect(await CalculatorPage.getTextFromRegion()).toEqual('Region: Frankfurt');
        expect(await CalculatorPage.getTextFromCommitmentTerm()).toEqual('Commitment term: 1 Year');
        expect(await CalculatorPage.getTextFromProvisioningModel()).toEqual('Provisioning model: Regular');
        expect(await CalculatorPage.getTextFromOperatingSystem()).toEqual('Operating System / Software: Free'); 
    })

    it.only('should add to estimate and send an email (Hardcore)', async () => {
        const series = 'n1';
        const instanceType = '30GB';
        const vm_class = 'regular'; 
        const os = 'free';
        const ssd = '2x375 GB';
        const GPUtype = 'NVIDIA_TESLA_P100'
        const num = '1';
        const center = 'Frankfurt (europe-west3)';
        const year1 = '1 Year';

        const region = 'Region: Frankfurt';
        const email = 'sejax15424@tingn.com';

        await MainPage.open();
        await MainPage.fillOutSearchInput('Google Cloud Platform Pricing Calculator');
        await browser.keys('Return');
        await MainPage.clickSearchResult();
        await MainPage.switchToFrame();

        await CalculatorPage.activateComputeEngine();  
        await CalculatorPage.inputNumberOfInstances(4); // 4
        await CalculatorPage.inputInstancesText('leave blank'); // leave blank
        await CalculatorPage.selectOperatingSystem(os); // Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
        await CalculatorPage.selectVMclass(vm_class); // regular
        await CalculatorPage.selectSeries(series); // N1
        await CalculatorPage.selectInstanceType(instanceType); // n1-standard-8 (vCPUs: 8, RAM: 30 GB)
        await CalculatorPage.selectAddGPus();
        await CalculatorPage.selectGPUType(GPUtype); 
        await CalculatorPage.selectLocalSSD(ssd); // 2x375 Gb
        await CalculatorPage.selectDatacenter(center); // Frankfurt (europe-west3)
        await CalculatorPage.selectCommitedUsage(); // 1 Year
        await CalculatorPage.clickAddToEstimateBtn();
        await CalculatorPage.clickEmailEstimateBtn();
        await CalculatorPage.inputEmail(email); 
        await CalculatorPage.clickSendEmailBtn();

        expect(await CalculatorPage.checkResultBlockIsDisplayed()).toBeDisplayed();
        expect(await CalculatorPage.getTextFromRegion()).toEqual('Region: Frankfurt');
        expect(await CalculatorPage.getTextFromCommitmentTerm()).toEqual('Commitment term: 1 Year');
        expect(await CalculatorPage.getTextFromProvisioningModel()).toEqual('Provisioning model: Regular');
        expect(await CalculatorPage.getTextFromOperatingSystem()).toEqual('Operating System / Software: Free');
    })
})


