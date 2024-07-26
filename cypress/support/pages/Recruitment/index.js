import {Candidate, Usuario } from '../../../variables';

const elements = require('./elements').ELEMENTS;

class Recruitment {
    
    createCandidate(){
              
        cy.get(elements.titleMenuId).should('be.visible').click();
        cy.get(elements.addButtonId).should('be.visible').click();
        cy.get(elements.inputFirstNameId).should('be.visible').type(Candidate.firstName);
        cy.get(elements.inputMiddleNameId).should('be.visible').type(Candidate.midlename);
        cy.get(elements.inputLastNameId).should('be.visible').type(Candidate.lastname);
        cy.get(elements.inputVacancyId).should('be.visible').click();
        cy.get(elements.inputDropDownId).contains('Senior QA Lead').click();
        cy.get(elements.inputEmailId).should('be.visible').type(Candidate.email);
        cy.get(elements.inputPhoneId).should('be.visible').type(Candidate.phone);
        cy.get(elements.inputKeywordsId).should('be.visible').type('QA, Lead, Quality');
        cy.get(elements.inputNotesId).should('be.visible').type('Nothing to complement');
        cy.get(elements.saveButton).should('be.visible').click();
        cy.wait(2000);
        cy.get(elements.saveMassage).should('be.visible');
        cy.wait(2000);
        cy.get(elements.titleMenuId).should('be.visible').click();
        cy.get(elements.autoCompleteNameId).should('be.visible').type(Candidate.firstName);
        cy.get(elements.autoCompleteFullName).contains(Candidate.fullName).click();
        cy.get(elements.searchButton).should('be.visible').click();
        cy.scrollTo('bottom');
        cy.get(elements.validateName).should('contain.text', Candidate.fullName);
    }
    
};

export default new Recruitment();