
# Automation OrangeHRM

Project created to automate the login system, candidate profile creation and candidate profile editing of the OrangeHRM system
## Reference for project creation

 - [Official documentation from Cypress](https://docs.cypress.io/guides/overview/why-cypress)
 - [Official documentation from do JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Installation

To install Cypress and start neutralizing the current project, follow the tests below. 

Install NodeJs
```bash
  npm install --save-dev
```
Start NodeJs

```bash
  npm init
```
Cloning the repository
```bash
  git clone https://github.com/MarceloRigon/automation_adp.git
```

## Run the tests

To run the tests and watch the execution on screen, just run the following command

```bash
  npx cypress open
```
To run the tests and watch the execution in Headless mode, just run the following command
```bash
  npx cypress run
```

For future implementation, files were created to run the tests in the Prod and QA environments.

Opening the Cypress visual environment to see the tests running in real time on screen.

Environment QA
```bash
  npx cypress open --config-file qa.config.js
```
Environment Prod
```bash
  npx cypress open --config-file prod.config.js
```
Run the tests in headless mode. 

Environment QA
```bash
  npx cypress run --spec --config-file qa.config.js
```
Environment Prod
```bash
  npx cypress run --spec --config-file prod.config.js
```
With these commands, you'll be able to run in both the Production and QA environments.

## Bugs found during testing

- System allows you to create candidates with identical data.

- System does not allow you to search for a candidate by full name, only by first name.

- When viewing a candidate, the “Job Vacancy” field is not blocked, allowing you to view other options. 

## Tool used to record and export errors

An attempt was made to use the “mochawesome” plugin, but I believe that the packages are no longer being updated, so there was a divergence with the version, in which case we will use the logs generated by cypress itself. 

install mochawesome 

```bash
  npm install mochawesome cypress-mochawesome-reporter --save-dev
```
Insert the following command in all index files
```bash
  import 'cypress-mochawesome-reporter/register';
```
## Stack and concepts used 

**Javascript:** Cypress

**Design Pattern:** Page Objects

**SOLID:** Interface Segregation Principle (ISP), Single Responsibility Principle (SRP)
