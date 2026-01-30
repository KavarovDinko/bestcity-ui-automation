const { expect } = require('chai');
const { createDriver } = require('../utils/driverFactory');
const HomePage = require('../pages/HomePage');
const PropertiesPage = require('../pages/PropertiesPage');

describe('Properties Page Test', function () {
  let driver, home, properties;

  beforeEach(async () => {
    driver = await createDriver();
    home = new HomePage(driver);
    properties = new PropertiesPage(driver);
  });

  afterEach(async () => {
    if (driver) await driver.quit();
  });

  it('navigates to properties and validates cards', async () => {
    await home.open();
    await home.click(home.propertiesNav);

    const heading = await properties.waitForXpath(properties.heading);
    expect(await heading.isDisplayed()).to.be.true;

    const cards = await driver.findElements({ xpath: properties.propertyLinks });
    expect(cards.length).to.be.at.least(3);

    await properties.takeScreenshot('properties-page.png');
  });
});
