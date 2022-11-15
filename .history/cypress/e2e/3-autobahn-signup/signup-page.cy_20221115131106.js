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
      cy.get('.button-wrapper > .custom-button > .btn').should('have.css', 'background-color', 'rgb(230, 51, 42)');

    //   cy.get('.button-wrapper > .custom-button').click();
      cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
      })

    it('Attempt to signup using strong password', () => {
    // https://on.cypress.io/clearlocalstorage
    var username = 'akram@mailinator.com';
    var password = 'Qwerty123!';
    login.doLogin(username, password);
    })
})