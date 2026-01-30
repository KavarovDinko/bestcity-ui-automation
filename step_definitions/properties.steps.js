const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const PropertiesPage = require('../pages/PropertiesPage');

let properties;

Given('I open the Properties page', async function () {
  properties = new PropertiesPage(this.driver);
  await properties.open();
});

Then('Properties heading should be visible', async function () {
  const heading = await properties.find(properties.heading);
  expect(await heading.isDisplayed()).to.be.true;
});

Then('at least 3 property cards should be displayed', async function () {
  const cards = await this.driver.findElements({ xpath: properties.propertyCards });
  expect(cards.length).to.be.at.least(3);
});

Then('Footer should be visible on properties page', async function () {
  const footer = await properties.find(properties.footer);
  expect(await footer.isDisplayed()).to.be.true;
});
