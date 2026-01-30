const BasePage = require('./BasePage');

class PropertiesPage extends BasePage {
  heading = "//h1[normalize-space()='Investment Properties']";
  propertyCards = "//a[contains(@href,'/properties/')]";
  footer = "//footer";

  async open() {
    await super.open("http://localhost:3000/properties");
  }
}

module.exports = PropertiesPage;
