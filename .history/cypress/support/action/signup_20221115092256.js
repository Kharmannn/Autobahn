export class sign{

    getUsernameField() {
        return cy.get('#email')
    };

    getPasswordField() {
        return cy.get('#password')
    }

    doLogin(username, password) {

        this.getUsernameField().clear().type(username);
        this.getPasswordField().clear().type(password);
        cy.get('.btn').click();
    }
}