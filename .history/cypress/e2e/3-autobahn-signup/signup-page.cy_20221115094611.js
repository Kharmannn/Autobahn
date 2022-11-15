
const login = new sign()

context('Login to page', () => {
    beforeEach(() => {
      cy.visit('https://bo-koindeposito-partner.koin.works/')
    })
  
    it('Attempt to login', () => {
      // https://on.cypress.io/clearlocalstorage
      login.doLogin('akram+adm_depo@koinworks.com', 'Qwerty123!');
      })
})