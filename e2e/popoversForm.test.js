import puppeteer from "puppeteer";
describe("popovers Form", () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test("form load test", async() => {
    await page.goto('http://localhost:9000')

    await page.waitForSelector('.form-conteiner');
  });

  test("form load test", async() => {
    await page.goto('http://localhost:9000')

    await page.waitForSelector('.form-conteiner');

    const form = await page.$('.form-conteiner');

    const button = await form.$('.button');


    await button.click()

    await page.waitForSelector('.form-conteiner .visibility');
  });

  afterEach(async () => {
    await browser.close();
  });
});


