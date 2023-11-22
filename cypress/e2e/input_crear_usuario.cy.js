describe("botones crear usuario", () =>{
    it("crear usuario nuevo", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get('#dropdownMenuButton1').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get('[href="/show_user/1"]').click()
        cy.get('#dropdownMenuButton1').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('.fs-5').click()

    })
})