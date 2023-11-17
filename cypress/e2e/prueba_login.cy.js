describe("", () =>{
    it ("log in", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
    })   
})