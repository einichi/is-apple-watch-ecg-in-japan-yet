const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.apple.com/watchos/feature-availability');

    // Get the "viewport" of the page, as reported by the page.
    const present = await page.evaluate(() => {
        var elems = Array.from(document.getElementById('branded-ecg').getElementsByTagName('li'));
        for (let i = 0; i < elems.length; i++) {
            console.log(elems[i].innerText);
            if (elems[i].innerText == "Japan") {
                return true;
            }
        }
        return false;
    });

    console.log(present);

    await browser.close();
})();
