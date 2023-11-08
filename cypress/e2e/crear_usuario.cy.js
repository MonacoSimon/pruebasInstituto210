describe("prueba crear usuario", () =>{
    it("crear usuario nuevo", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get('#dropdownMenuButton1').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#id_dni').type("65198396")
        cy.get('#id_nombres').type("jose")
        cy.get('#id_apellidos').type("vazques")
        cy.get('#id_email').type("jose@1234.col")
        cy.get('.botones-registracion > .btn').click()

    })
})