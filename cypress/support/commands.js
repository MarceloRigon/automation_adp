/*
--Suggestion for future implementation to use in different environments

Cypress.Commands.add('login',()=>{
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(Cypress.env('username'), { log: false });
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(Cypress.env('password'), { log: false });
    cy.get('.oxd-button').click();
});
*/
import Login from "./pages/Login";
import Recruitment from "./pages/Recruitment";
import EditCandidate from "./pages/EditCandidate";

Cypress.Commands.add('login', ()=>{
    Login.acessarPaginaLogin();
    Login.preencherLogin();
});

Cypress.Commands.add('site', ()=>{
    Login.acessarPaginaLogin();
    cy.title().should('equal','OrangeHRM');
});

Cypress.Commands.add('createCandidate', () =>{
    Login.acessarPaginaLogin();
    Login.preencherLogin();
    Recruitment.createCandidate();
})

Cypress.Commands.add('editCandidate', () =>{
    Login.acessarPaginaLogin();
    Login.preencherLogin();
    EditCandidate.editCandidate();
})