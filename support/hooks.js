const { Before, After, Status } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

Before(async function () {
  this.driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions()
    .build();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const screenshot = await this.driver.takeScreenshot();
    const fileName = scenario.pickle.name.replace(/ /g, "_") + ".png";
    fs.writeFileSync(path.join("screenshots", fileName), screenshot, "base64");
  }
  await this.driver.quit();
});
