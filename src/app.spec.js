/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
/// <reference types="cypress" />
import React from "react";
import { mount } from "@cypress/react";
import App from './App'

describe("App Component", () => {
    it("renders steps", () => {
        mount(
        <App/>
        );
        cy.get('.App-link').contains('Learn React')
    });
});