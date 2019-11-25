# Functional UI Coding Challenge Tests

## Summary
This directory contains the UI Tests for the  front-end projects, these tests are written in nodejs using [mocha](https://mochajs.org/) test framework, [cypress](https://www.cypress.io/), and [Allure](https://www.npmjs.com/package/@wdio/allure-reporter) for reporting.

## Code Guidelines
- Code should be clean and kept to the same standard as production code - make sure unused variables and methods are removed, code is correctly formatted, with no random newlines and whitespaces. Where possible node js style guidelines should be followed.
- I recommend using [Visual Studio Code](https://code.visualstudio.com/) and installing the eslintrc extension. ***Warnings must not be ignored.***
- Please eslint plugin. 

## Installation
You should have Node.js installed. If you don't have Node installed, I recommend installing NVM to assist managing multiple active Node.js versions. My recommended version is `10+`.
    
Once node is installed, execute:   

    npm ci

## How do I run the tests on my local machine?

    npm test
    
## Launch Arguments
By default tests are executed using a Chrome browser. 

To run tests in headless mode:

    npm run test -- --browser electron

To run tests in Chrome browser:

    npm run test

## Generate Allure report 
    
    npm run report

## Coding Challenge Test Reports

### Home Spec test report
![](https://github.com/kjayachandra2000/cypress-code/blob/master/report-gif/home.spec.js.gif)

### PairTrade Spec test report
![](https://github.com/kjayachandra2000/cypress-code/blob/master/report-gif/pairTrade.spec.gif)
