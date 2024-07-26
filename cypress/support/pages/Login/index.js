import { User } from '../../../variables';

const elements = require('./elements').ELEMENTS;


class Login {
    
    acessarPaginaLogin(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    };
    
    preencherLogin(){
               
        cy.get(elements.userId).should('be.visible').type(User.username);
        cy.get(elements.passwordId).should('be.visible').type(User.password);
        cy.get(elements.buttonLogin).click();
        cy.get(elements.titleMenu).should('contain.text','Dashboard')
    };

};

export default new Login();