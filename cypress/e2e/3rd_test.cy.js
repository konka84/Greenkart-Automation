//const { expect } = require("chai")

describe('this is 3rd test suite',()=>{
    //  it('checkbox',()=>{
    //      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    //     cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    //     cy.get('input[type="checkbox"]').check(['option2','option3'])
    //  })
    // it('static drop down',()=>{
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     //cy.get('select').select('option1').should('have.value','option1')

    //     cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
    // }) 
    // it('dynamic drop down',()=>{
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     cy.get('#autocomplete').type('ban')
    //  }) 
    // it('radio button',()=>{
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //     cy.get('[value="radio1"]').check().should('be.checked')
      

    // })
    //  it('visible-invisible',()=>{
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //    cy.get('#displayed-text').should('be.visible')
    //     cy.get('#hide-textbox').click()
    //     cy.get('#displayed-text').should('not.be.visible')
    //     cy.get('#show-textbox').click()
    //     cy.get('#displayed-text').should('be.visible')
    //  })
     
//    it('alert',()=>{
//     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//     cy.get('#alertbtn').click()
//     cy.get('[value="Confirm"]').click()
//     cy.on('windows:alert',(str)=>{
//         expect(str).to.equal('Hello , share this practice page and share your knowledge')
//     })
//     cy.on('window:confirm',(str)=>{
//         expect(str).to.equal('Hello , Are you sure you want to confirm?')
//     })

//     })
it('child tab', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.wait(6000)

    cy.origin('https://www.qaclickacademy.com', () => {
        cy.get('span').contains('info@qaclickacademy.com').should('be.visible')
        cy.url().should('include','qaclickacademy')
        
        cy.go('back')
    })
})


   

})


