import {allureCypress} from 'allure-cypress/reporter';
import {defineConfig} from "cypress";


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    env: {
      frontBaseUrl: 'https://front.serverest.dev',
      backBaseURL: 'https://serverest.dev',
    },
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
  },
});