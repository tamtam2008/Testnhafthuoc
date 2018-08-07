describe('First step', function(){
  it('Visit webside smartpharmacy', function(){
    cy.visit('https://smartpharmacy.digihcs.com/')
  })

  it('Finds an elements', function(){
    cy.get('input[type=text]')
    .type('admin').should('have.value', 'admin')

    cy.get('input[type=password]')
    .type('12345678').should('have.value', '12345678')

    cy.get('input[type=checkbox]').check()

    cy.get('.bt-dang-nhap').click()
    cy.get('.notification-message').contains('Đăng nhập thành công!');

    cy.contains('Bán hàng').click({force: true})

    cy.contains('Tạo mới (F4)').click()

    // cy.get('.Select-placeholder')
    cy.get('form').within(() => {
    cy.get('input').type('Pamela')
    cy.get('textarea').type('is a developer')
})
    cy.get('input').should('be.disabled')

    cy.get('.notification-message').contains(/XB/);
    cy.contains('Hủy').click()
    cy.get('textarea').then((textarea) => {
      console.log('textarea ', textarea[1])
      textarea[1].innerHTML = "abc";
    })
    cy.get('.notification-message').then((note) => {
      // get the first user
      console.log('note ', note)
    })

  })
})
