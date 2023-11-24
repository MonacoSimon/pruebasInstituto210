describe("prueba boton carreras", () =>{
    it("", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .nav-link').click()
    })
})