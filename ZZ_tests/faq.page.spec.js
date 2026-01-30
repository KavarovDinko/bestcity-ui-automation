const { expect } = require('chai');
const { createDriver } = require('../utils/driverFactory');
const { By, until } = require('selenium-webdriver');

describe('FAQ Page Test', function () {
  let driver;

  beforeEach(async () => {
    driver = await createDriver();
  });

  afterEach(async () => {
    if (driver) await driver.quit();
  });

  it('opens FAQ and expands first question', async () => {
    await driver.get('http://localhost:3000/faq');

    // ✅ Correct heading (h1, not h2)
    const heading = await driver.wait(
      until.elementLocated(By.xpath("//h1[contains(text(),'Frequently Asked Questions')]")),
      15000
    );
    expect(await heading.isDisplayed()).to.be.true;
    console.log('✅ FAQ heading visible');

    // ✅ Find all FAQ question buttons
    const questions = await driver.findElements(
      By.xpath("//button[.//span[contains(@class,'font-medium')]]")
    );

    console.log(`Found ${questions.length} FAQ questions`);
    expect(questions.length).to.be.at.least(5);

    // ✅ Click first question
    await questions[0].click();
    console.log('✅ First FAQ question expanded');

    // Screenshot
    const fs = require('fs');
    const data = await driver.takeScreenshot();
    fs.writeFileSync('faq-page.png', data, 'base64');
    console.log('Screenshot: faq-page.png');
  });
});
