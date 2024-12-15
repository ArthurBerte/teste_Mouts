import {allureCypress} from "allure-cypress/reporter";
import {defineConfig} from "cypress";


export default defineConfig({
  e2e: {
    setupNodeEvents: function (on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      config.env = {
        frontBaseUrl: 'https://front.serverest.dev',
        backBaseUrl: 'https://serverest.dev',
      };
      return config;
    },
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
  },
});