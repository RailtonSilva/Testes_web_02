describe('Testes de Login', () => {
  it.only('Login com sucesso', () => {

    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('felipesilva123@gmail.com')
    cy.get('[data-testid="senha"]').type('felipe1122')
    cy.get('[data-testid="entrar"]').click()
//comprando produto
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('h1').contains('Lista de Compras')
    cy.get('[data-testid="shopping-cart-product-name"]').should('have.text','Produto:Logitech MX Vertical')

  })


  it('Login com erro', () => {

    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('railtonh543@gmail.com')
    cy.get('[data-testid="senha"]').type('railton251@')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').should('have.text','Email e/ou senha inválidos')
  })
})
