import puppeteer from "puppeteer";
describe("Page start", () => {
  let browser;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
  });

  test("testE2E", () => {
    
  });
});
