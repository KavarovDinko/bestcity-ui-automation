const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const FAQPage = require('../pages/FAQPage');

let faq;

Given('I open the FAQ page', async function () {
  faq = new FAQPage(this.driver);
  await faq.open();
});

Then('FAQ heading should be visible', async function () {
  const el = await faq.find(faq.heading);
  expect(await el.isDisplayed()).to.be.true;
});

When('I click first FAQ question', async function () {
  const questions = await this.driver.findElements({ xpath: faq.questions });
  await questions[0].click();
});

Then('FAQ answer should be displayed', async function () {
  const answer = await this.driver.findElement({ xpath: "//div[contains(@class,'p-6')]" });
  expect(await answer.isDisplayed()).to.be.true;
});
