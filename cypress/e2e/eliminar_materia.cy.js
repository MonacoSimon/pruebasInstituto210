describe("prueba eliminar matera", () =>{
    it("", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get('#dropdownMenuButton2').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get(':nth-child(1) > :nth-child(7) > .btn-danger').click()
        cy.get('.btn-danger').click()
        
    })
})