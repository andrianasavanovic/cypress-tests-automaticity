const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.prestashop.com',
    chromeWebSecurity: false,
    supportFile: false,
    defaultCommandTimeout: 15000,
  },
});

