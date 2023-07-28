const puppeteer = require('puppeteer');
const { expect } = require('chai');

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

describe('CheckoutForm', function () {
  // Used function instead of arrow function to be able to set timeout
  this.timeout(30000); // Set timeout to 30 seconds

  let browser, page;

  before(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('http://localhost:3000'); // URL to your checkout page
    await page.waitForSelector('.amount-element');
    await page.type('.amount-element input', '123');
    await page.click('.amount-element button');
  });

  after(() => {
    browser.close();
  });

  it('should fill out the card details', async () => {
    const frameHandle = await page.waitForSelector('#payment-element iframe');
    const frame = await frameHandle.contentFrame();

    await delay(5000);

    await frame.waitForSelector('input[name="number"]');
    await frame.type('input[name="number"]', '4242 4242 4242 4242'); // Stripe's test card number

    await frame.waitForSelector('input[name="expiry"]');
    await frame.type('input[name="expiry"]', '1224');

    await frame.waitForSelector('input[name="cvc"]');
    await frame.type('input[name="cvc"]', '123');

    await page.click('#submit');
    await page.waitForNavigation();

    await delay(3000);

    expect(page.url().includes('succeeded')).to.be.true; // Assuming user is redirected to a success page
  });
});
