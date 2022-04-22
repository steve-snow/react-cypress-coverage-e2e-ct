/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Visit CRA home", () => {
    it("goes to root page and has content", () => {
        // cy.visit('http://localhost:3000')
        cy.visit('/')
        cy.get('.App-link').contains('Learn React')
    });
});