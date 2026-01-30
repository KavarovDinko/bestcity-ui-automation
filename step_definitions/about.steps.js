const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const AboutPage = require('../pages/AboutPage');

let about;

Given('I open the About page', async function () {
  about = new AboutPage(this.driver);
  await about.open();
});

Then('section {string} should be visible', async function (section) {
  const el = await about.getSectionByText(section);
  expect(await el.isDisplayed()).to.be.true;
});
