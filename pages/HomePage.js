const { By, until } = require('selenium-webdriver');

class HomePage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'http://localhost:3000/';

    // Locators (robust)
    this.heroTitle = By.xpath("//h1[contains(text(),'Invest and Trade')]");
    this.startInvesting = By.xpath("//h2[contains(text(),'Start Investing')]");
    this.howWorks = By.xpath("//h2[contains(text(),'How BestCity Works')]");
    this.featured = By.xpath("//h2[contains(text(),'Featured')]");
    this.faq = By.xpath("//h2[contains(text(),'Frequently Asked Questions')]");
    this.footer = By.tagName("footer");
    this.header = By.tagName("nav");
  }

  async open() {
    await this.driver.get(this.url);
  }

  async find(locator) {
    const element = await this.driver.wait(
      until.elementLocated(locator),
      15000
    );

    await this.driver.wait(until.elementIsVisible(element), 10000);

    // scroll into view for safety
    await this.driver.executeScript(
      "arguments[0].scrollIntoView({block:'center'});",
      element
    );

    return element;
  }
}

module.exports = HomePage;
