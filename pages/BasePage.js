const { By, until } = require('selenium-webdriver');

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async open(url) {
    await this.driver.get(url);
  }

  async find(xpath) {
    return await this.driver.wait(
      until.elementLocated(By.xpath(xpath)),
      10000
    );
  }
}

module.exports = BasePage;
