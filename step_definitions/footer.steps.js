const { When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect } = require('chai');

When('I click footer link {string}', async function (linkText) {
  const link = await this.driver.wait(
    until.elementLocated(By.linkText(linkText)),
    10000
  );

  // Scroll into view
  await this.driver.executeScript("arguments[0].scrollIntoView({block:'center'});", link);

  // Wait until clickable
  await this.driver.wait(until.elementIsVisible(link), 5000);
  await this.driver.sleep(500);

  await this.driver.executeScript("arguments[0].click();", link);
});

Then('I should be navigated to {string}', async function (path) {
  await this.driver.wait(async () => {
    const url = await this.driver.getCurrentUrl();
    return url.includes(path);
  }, 10000);

  const currentUrl = await this.driver.getCurrentUrl();
  expect(currentUrl).to.include(path);
});
