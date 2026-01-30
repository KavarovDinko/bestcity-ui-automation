const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');

class CustomWorld {
  async init() {
    this.driver = await new Builder().forBrowser('chrome').build();
  }

  async quit() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

setDefaultTimeout(10000);
setWorldConstructor(CustomWorld);
