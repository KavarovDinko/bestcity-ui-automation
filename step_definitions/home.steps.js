const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const HomePage = require('../pages/HomePage');

let home;

Given('I open the home page', async function () {
  home = new HomePage(this.driver);
  await home.open();
});

Then('hero section should be visible', async function () {
  const el = await home.find(home.heroTitle);
  expect(await el.isDisplayed()).to.be.true;
});

Then('Start Investing section should be visible', async function () {
  const el = await home.find(home.startInvesting);
  expect(await el.isDisplayed()).to.be.true;
});

Then('How BestCity Works section should be visible', async function () {
  const el = await home.find(home.howWorks);
  expect(await el.isDisplayed()).to.be.true;
});

Then('Featured Opportunities section should be visible', async function () {
  const el = await home.find(home.featured);
  expect(await el.isDisplayed()).to.be.true;
});

Then('FAQ section should be visible', async function () {
  const el = await home.find(home.faq);
  expect(await el.isDisplayed()).to.be.true;
});

Then('Footer should be visible', async function () {
  const el = await home.find(home.footer);
  expect(await el.isDisplayed()).to.be.true;
});

Then('Header should be visible', async function () {
  const el = await home.find(home.header);
  expect(await el.isDisplayed()).to.be.true;
});

