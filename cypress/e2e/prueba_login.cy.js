describe("", () =>{
    it ("log in", () =>{
        cy.visit("http://127.0.0.1:8000/")
        cy.get('.icono-nav').click()
        cy.get('#id_username').type("vale.balma95@gmail.com")
        cy.get('#id_password').type("riverplate")
        cy.get('.btn').click()
    })   
})