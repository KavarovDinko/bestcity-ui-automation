const { By, until } = require('selenium-webdriver');

class AboutPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'http://localhost:3000/about';
  }

  async open() {
    await this.driver.get(this.url);
  }

  async getSectionByText(sectionText) {
    // const locator = By.xpath(`//h3[contains(normalize-space(.),"${sectionText}")]`);

    const locator = By.xpath(
      `//*[self::h1 or self::h2 or self::h3][contains(normalize-space(.),"${sectionText}")]`
    );

    const el = await this.driver.wait(
      until.elementLocated(locator),
      15000,
      `Section "${sectionText}" not found`
    );

    await this.driver.wait(until.elementIsVisible(el), 10000);

    await this.driver.executeScript(
      "arguments[0].scrollIntoView({block:'center'});",
      el
    );

    return el;
  }
}

module.exports = AboutPage;
