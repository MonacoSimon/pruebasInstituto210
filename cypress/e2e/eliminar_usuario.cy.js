describe("suite pruebas celular", () =>{
    it("prueba samsung", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("usuario@admin.com")
        cy.get('#id_password').type("contraseña")
        cy.get('.btn').click()
        cy.get('#dropdownMenuButton1').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
        cy.get(':nth-child(3) > :nth-child(7) > [data-bs-toggle="modal"]').click()
        cy.get(':nth-child(1) > :nth-child(7) > #exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    })
})