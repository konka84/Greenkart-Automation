describe('my 2nd test suite',function(){

    it('my first test case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('input[type="search"]').type('ca')
        cy.wait(2000)
       //cy.get('div.product').should('be').eq('4')
       cy.get('div.product:visible').should('have.length',4)
       //cy.get('div.products-wrapper').find('div.product').should('have.length',4)
       //cy.get('div.products').find('div.product').eq('3').contains('ADD TO CART').click()
       //or
       //cy.get('div.product').eq('3').contains('ADD TO CART').click()
       cy.get(':nth-child(4) > .product-action > button').click()
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
       cy.get('button').click()

       

       
       

      })
  })