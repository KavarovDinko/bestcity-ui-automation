const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const fs = require('fs');

describe('BestCity – Footer Links', function () {
  this.timeout(60000);

  let driver;

  before(async () => {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(['--window-size=1920,1080'])
      .build();
  });

  after(async () => {
    if (driver) await driver.quit();
  });

  it('validates footer links navigation', async () => {
    await driver.get('http://localhost:3000/');
    await driver.sleep(3000);

    // Scroll to footer
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    await driver.sleep(2000);

    const footer = await driver.findElement(By.xpath("//footer"));
    expect(await footer.isDisplayed()).to.be.true;
    console.log('✅ Footer visible');

    // Footer links
    const links = [
      { text: 'Properties', url: '/properties' },
      { text: 'About Us', url: '/about' },
      { text: 'FAQ', url: '/faq' },
      { text: 'Privacy Policy', url: '/privacy' }
    ];

    for (const link of links) {
      const element = await driver.findElement(
        By.xpath(`//footer//a[normalize-space(text())='${link.text}']`)
      );

      await element.click();
      await driver.sleep(3000);

      const currentUrl = await driver.getCurrentUrl();
      console.log(`Navigated to: ${currentUrl}`);

      expect(currentUrl).to.include(link.url);
      console.log(`✅ ${link.text} link works`);

      await driver.navigate().back();
      await driver.sleep(2000);
    }

    // Screenshot
    await driver.takeScreenshot().then(data => {
      fs.writeFileSync('footer-links.png', data, 'base64');
      console.log('📸 Screenshot: footer-links.png');
    });
  });
});
