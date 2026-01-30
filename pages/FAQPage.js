const BasePage = require('./BasePage');

class FAQPage extends BasePage {
  heading = "//h1[contains(text(),'Frequently Asked Questions')]";
  questions = "//button[.//span]";

  async open() {
    await super.open("http://localhost:3000/faq");
  }
}

module.exports = FAQPage;
