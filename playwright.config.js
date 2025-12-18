// @ts-check
import { defineConfig, devices } from '@playwright/test';
const {defineBddConfig} = require ('playwright-bdd');
const config = ({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {    
    browserName: 'chromium',
    headless: false,
   },  
 });
       
module.exports = config

module.exports = {
  reporter: [
    ['list'],
    ['allure-playwright']
  ]
};


