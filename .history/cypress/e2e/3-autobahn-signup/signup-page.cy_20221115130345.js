import { signupAction } from "../../support/action/signup"

const login = new signupAction()

context('Login to page', () => {
    beforeEach(() => {
      cy.visit('https://autobahn.security/signup')
    })
  
    it('Attempt to signup using strong password', () => {
      // https://on.cypress.io/clearlocalstorage
      var username = 'akram@mailinator.com'
      var password = 
      login.doLogin('akram@mailinator.com', 'LastoneSteps!123');
      })

    it('Attempt to signup using strong password', () => {
    // https://on.cypress.io/clearlocalstorage
    var username = 'akram@mailinator.com';
    var password = 'Qwerty123!';
    login.doLogin(username, password);
    })
})