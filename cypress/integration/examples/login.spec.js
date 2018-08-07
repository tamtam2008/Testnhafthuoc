describe('First step', function(){
  it('Visit webside smartpharmacy', function(){
    cy.visit('https://smartpharmacy.digihcs.com/')
  })

  it('Finds an elements', function(){
    cy.get('input[type=text]')
    .type('admin').should('have.value', 'admin')

    cy.get('input[type=password]')
    .type('12345678').should('have.value', '12345678')
    //Duy trì login
    cy.get('input[type=checkbox]').check()
    //ĐN
    cy.get('.bt-dang-nhap').click()
    cy.get('.notification-message').contains('Đăng nhập thành công!');
  })
})
