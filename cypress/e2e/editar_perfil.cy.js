describe("editar perfil",()=>{
    it("editar perfil",()=>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get('.btn > .nav-link > .icono-nav').click()
        cy.get('.dropstart > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get('#id_username').type("vale")
        cy.get('#id_nombres').type("Valeria")
        cy.get('#id_apellidos').type("Balmaceda")
    })
})