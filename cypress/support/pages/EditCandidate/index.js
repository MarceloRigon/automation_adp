import { Candidate,Candidate02, Usuario } from '../../../variables';

const elements = require('./elements').ELEMENTS;
const el = require('../Recruitment/elements').ELEMENTS;

class EditCandidate {
    
   editCandidate(){

    cy.get(el.titleMenuId).should('be.visible').click();
    cy.get(el.autoCompleteNameId).should('be.visible').type(Candidate.firstName);
    cy.get(el.autoCompleteFullName).contains(Candidate.fullName).click();
    cy.get(el.searchButton).should('be.visible').click();
    cy.scrollTo('bottom');
    cy.get(el.validateName).should('contain.text', Candidate.fullName);
    cy.get(elements.openProfileCandidate).should('be.visible').click();
    cy.wait(2000);
    cy.get(elements.switchButton).should('be.visible').click();
    cy.get(el.inputFirstNameId).should('have.value',Candidate.firstName).clear();
    cy.get(el.inputFirstNameId).should('have.value','').type(Candidate02.firstName2);
    cy.get(el.inputMiddleNameId).should('have.value', Candidate.midlename).clear();
    cy.get(el.inputMiddleNameId).should('have.value','').type(Candidate02.midlename2);
    cy.get(el.inputLastNameId).should('have.value', Candidate.lastname).clear();
    cy.get(el.inputLastNameId).should('have.value','').type(Candidate02.lastname2);
    cy.get(el.inputVacancyId).should('be.visible').click();
    cy.get(el.inputDropDownId).contains('Junior Account Assistant').click();
    cy.get(el.inputEmailId).should('have.value', Candidate.email).clear();
    cy.get(el.inputEmailId).should('have.value','').type(Candidate02.email2);
    cy.get(el.inputPhoneId).should('have.value', Candidate.phone).clear();
    cy.get(el.inputPhoneId).should('have.value','').type(Candidate02.phone2);
    cy.get(elements.editKeywords).should('have.value','QA, Lead, Quality').clear();
    cy.get(elements.editKeywords).should('have.value','').type('Account, Assistant');
    cy.get(elements.saveButtonFormEdit).should('be.visible').click()
    cy.get(elements.viewModal).should('be.visible')
    cy.get(elements.saveButtonModal).should('be.visible').click();
    cy.wait(2000)
    cy.get(el.titleMenuId).should('be.visible').click();
    cy.get(el.autoCompleteNameId).should('be.visible').type(Candidate02.firstName2);
    cy.get(el.autoCompleteFullName).contains(Candidate02.fullName2).click();
    cy.get(el.searchButton).should('be.visible').click();
    cy.scrollTo('bottom');
    cy.get(el.validateName).should('contain.text', Candidate02.fullName2);
    }
    

};

export default new EditCandidate();