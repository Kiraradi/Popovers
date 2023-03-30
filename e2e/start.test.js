/**
 * @jest-environment jsdom
 */

import puppeteer from "puppeteer";
describe("Page start", () => {
  let browser;
  beforeEach(() => {
    browser = puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
  });

  test("testE2E", () => {});
});
