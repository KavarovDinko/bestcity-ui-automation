const BasePage = require('./BasePage');

class FooterPage extends BasePage {
  footerLink(text) {
    return `//footer//a[contains(text(),'${text}')]`;
  }
}

module.exports = FooterPage;
