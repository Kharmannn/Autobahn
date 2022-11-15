export class signupAction{

    getUsernameField() {
        return cy.get('.active > .form-control')
    };

    getPasswordField() {
        return cy.get('.input-group-icon > .form-control')
    }

    doLogin(username, password) {

        this.getUsernameField().clear().type(username);
        this.getPasswordField().clear().type(password);
        cy.get('.button-wrapper > .custom-button').click();
    }
}