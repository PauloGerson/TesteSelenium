const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

let service = new chrome.ServiceBuilder(chromedriver.path).build();
chrome.setDefaultService(service);

describe('Selenium Test', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should navigate to selenium.dev', async () => {
    await driver.get('https://selenium.dev');
    expect(await driver.getTitle()).toContain('Selenium');
  });
});
