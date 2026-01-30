const { expect } = require('chai');
const { createDriver } = require('../utils/driverFactory');
const HomePage = require('../pages/HomePage');

describe('Home Page Smoke Test', function () {
  let driver, home;

  beforeEach(async () => {
    driver = await createDriver();
    home = new HomePage(driver);
  });

  afterEach(async () => {
    if (driver) await driver.quit();
  });

  it('loads home and key sections', async () => {
    await home.open();

    const hero = await home.waitForXpath(home.heroTitle);
    expect(await hero.isDisplayed()).to.be.true;

    const faq = await home.waitForXpath(home.faqTitle);
    expect(await faq.isDisplayed()).to.be.true;

    await home.takeScreenshot('home-smoke.png');
  });
});
