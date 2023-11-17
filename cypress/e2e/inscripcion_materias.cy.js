describe("botones inscripcion materias", () =>{
    it("", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get(':nth-child(1) > h6 > a').click()
        cy.get('tr > :nth-child(6) > :nth-child(1)').click()
        cy.get(':nth-child(6) > :nth-child(2)').click()
        cy.get('.btn-danger').click()
    })
})