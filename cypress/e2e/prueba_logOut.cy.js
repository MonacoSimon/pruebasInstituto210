describe("log out", () =>{
    it("log out", ()=>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get('.btn > .nav-link > .icono-nav').click()
        cy.get('p').click()
        cy.get('.alert').should("be.visible")
        
    })
})