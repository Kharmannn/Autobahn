import { signupAction } from "../../support/action/signup"

const login = new signupAction()

context('Login to page', () => {
    beforeEach(() => {
      cy.visit('https://autobahn.security/signup')
    })
  
    it('Attempt to signup', () => {
      // https://on.cypress.io/clearlocalstorage
      login.doLogin('akram+adm_depo@koinworks.com', 'Qwerty123!');
      })
})