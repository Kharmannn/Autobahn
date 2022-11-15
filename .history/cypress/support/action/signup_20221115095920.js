export class signupAction{

    getUsernameField() {
        return cy.get('#.active > .form-control')
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