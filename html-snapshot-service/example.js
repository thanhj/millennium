const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://singtel.com');
  await page.screenshot({path: 'singtel.png'});

  await browser.close();
})();
