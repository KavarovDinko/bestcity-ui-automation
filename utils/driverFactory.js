const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function createDriver() {
  const options = new chrome.Options();

  if (process.env.HEADLESS === 'true') {
    options.addArguments('--headless=new');
  }

  options.addArguments(
    '--window-size=1920,1080',
    '--disable-web-security',
    '--no-sandbox',
    '--disable-dev-shm-usage'
  );

  return await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}

module.exports = { createDriver };
