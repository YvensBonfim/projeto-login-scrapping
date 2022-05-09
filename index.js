const puppeteer = require('puppeteer');


(async () =>{
  const browser = await puppeteer.launch({
    headless: false
  });
 
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login/');
  await page.waitFor('input[name="username"]');
  await page.type('input[name="username"]','nome do usuario', {delay: 100});
  await page.type('input[name="password"]', 'senha', {delay: 100});
  await page.keyboard.press('Enter');
})();
