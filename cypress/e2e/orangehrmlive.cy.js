// cypress/support/commands.js
// cypress/cypress.config.js
/* 
File calls for future implementation to run in different environments
 cypress/support/qa.config.js
 cypress/support/prod.config.js
*/
describe('Automation OrangeHRM', () => {
  //For future implementation, you can change cy.site('') ​​to cy.visit(''), so it will be possible to use the same code in Prod and QA environments.
  beforeEach(() => {
    cy.site('');
  })
  
it('Login', () => {
  cy.login();
})
  
it('Recruitment - Create Candidate', () => {
  cy.createCandidate();
  })

it('Recruitment - Edit candidate', () =>{
  cy.editCandidate();
})

})
