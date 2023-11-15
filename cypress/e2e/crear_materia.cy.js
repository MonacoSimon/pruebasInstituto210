describe("prueba crear materia", () =>{
    it("", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get('#dropdownMenuButton2').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.get('#id_nombre_materia').type("210")
        cy.get('#id_carrera').select('1')
    })
})