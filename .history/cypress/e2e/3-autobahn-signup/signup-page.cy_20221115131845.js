import { signupAction } from "../../support/action/signup"

const login = new signupAction()

context('Login to page', () => {
    beforeEach(() => {
      cy.visit('https://autobahn.security/signup')
    })
  
    it('Attempt to signup using strong password', () => {
      // https://on.cypress.io/clearlocalstorage
      var username = 'akram@mailinator.com'
      var password = 'LastoneSteps!123'
      login.doLogin(username, password);
      cy.get('.button-wrapper > .custom-button > .btn').should('have.css', 'background-color', 'rgb(230, 51, 90)');
    //   cy.get('.button-wrapper > .custom-button').click();
      })

    it('Attempt to signup using weak password', () => {
    // https://on.cypress.io/clearlocalstorage
    var username = 'akram@mailinator.com';
    var password = 'Qwerty123!';
    cy.get('.button-wrapper > .custom-button').should('be.disabled');
//   cy.get('.button-wrapper > .custom-button').click();
    })
})