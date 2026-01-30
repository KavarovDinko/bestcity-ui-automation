const { expect } = require('chai');
const { createDriver } = require('../utils/driverFactory');
const AboutPage = require('../pages/AboutPage');

describe('About Page Test', function () {
  let driver, about;

  beforeEach(async () => {
    driver = await createDriver();
    about = new AboutPage(driver);
  });

  afterEach(async () => {
    if (driver) await driver.quit();
  });

  it('loads About page', async () => {
    await about.open('http://localhost:3000/about');

    const heading = await about.waitForXpath(about.heading);
    expect(await heading.isDisplayed()).to.be.true;

    const paragraphs = await driver.findElements({ xpath: about.paragraphs });
    expect(paragraphs.length).to.be.at.least(2);

    await about.takeScreenshot('about-page.png');
  });
});
