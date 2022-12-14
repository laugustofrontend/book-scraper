const pageScraper = require('./pageScraper');

async function scraperAll(browserInstance) {
  let browser;

  try {
    browser = await browserInstance;

    await pageScraper.scraper(browser);
  } catch (err) {
    console.error('Could not resolve the browser instance: ', err);
  }
}

module.exports = browserInstance => scraperAll(browserInstance);
