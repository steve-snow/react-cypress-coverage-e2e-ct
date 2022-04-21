/// <reference types="cypress" />
/* eslint-disable */
// const Constants = require('../constants')
Cypress.on(
  'uncaught:exception',
  (err, runnable) => {
    cy.log('uncaught exception explained: ', err, runnable)
    // returning false here prevents Cypress from
    // failing the test
    return false
  },
);

Cypress.on('window:unload', () => {
  console.log('window unloaded 000')
})
// Cypress.on('fail', ($failedThing) => {
//   console.log('--- !!! --- FAILURE --- !!! ---')
//   console.log($failedThing)
// })

context('Register test', () => {
  it('Registering xxxx test', () => {
      cy.log('starting xxxx test')
    // cy.request({
    //   method: 'GET',
    //   url: '/api/logs/testRegistration?testname=coreTest',
    //   failOnStatusCode: false,
    // });
  });
});
context('1. User Basics', () => {
  describe('A. Customer User standard sequences', () => {
    // it('1. visit safe cookie test', () => {

    //   cy.log('--- --- api logout --- ---')
    //   cy.apiLogout()
    //   cy.visitUrlLinkSafeCookie('/id/uQNRsNU7L35L')

    // })

    // it('2. revised modal login', () => {
    //   cy.modalLogin(
    //     Constants.Users.customer,
    //   )

    // })
    // it('3. revised login', () => {
    //   cy.visitLogin(
    //     Constants.Users.customer,
    //   )

    // })

    it('11. Make sure we\'re logged out', () => {
      cy.request({
        method: 'GET',
        url: '/api/users/logout',
        failOnStatusCode: false,
      });
    //   cy.clearAuthenticationCookie();
    //   cy.clearCookie('cookeey1');
    //   cy.request('GET', '/api/users/current')
    //     .then((response) => {
    //       expect(response.body.item).to.eq(null);
    //       cy.log(response.body.item)
    //     });
    //   // optional
    //   cy.getCookies()
    //     .should(($cookies) => {
    //       cy.log($cookies.length)
    //     })
    });

    it('12. Nav Login', () => {

    //   cy.intercept('/api/users/current')
    //     .as('current')
    //   cy.intercept('/api/lookup/appversion')
    //     .as('appversion')
      // cy.intercept('https://outlayr.transactiongateway.com/token/api/create').as('token')

      // cy.on("window:unload", () => {
      //   console.log('window unloaded 1.A.2. a')
      // })
      cy.on('window:load', (x) => {
        console.log('window loading 1.A.2 b')
        console.log(x.onload)
        console.log(x.innerHeight)
        console.log(x.isSecureContext)
        console.log(x.closed)
      })
      cy.visit('/login')
      // cy.on("window:load", () => {
      //   console.log('window loading 1.A.2 c')
      // })
    //   cy.wait('@current')
      // cy.wait(['@current', '@appversion'], { requestTimeout: 40000, responseTimeout: 60000 })
      cy.wait(4000)

    //   cy.get(':nth-child(1) > .col-xs-12 > .form-control')
    //   cy.location('pathname')
    //     .should('eq', '/login');

    //   // if there's cookie consent click it
    //   cy.get('#cookieConfirmButton')
    //     .should('be.visible')
    //   cy.get('#cookieConfirmButton')
    //     .click()
    //   cy.checkPageA11y()
    });

    it('13. Login', () => {
    //   cy.get(':nth-child(1) > .col-xs-12 > .form-control')
    //     .type(Constants.Users.customer.email)
    //     .should('have.value', Constants.Users.customer.email);

    //   cy.get(':nth-child(2) > :nth-child(1) > .form-control')
    //     .type(
    //       Constants.Users.customer.password,
    //       {
    //         log: false,
    //       },
    //     );

    //   cy.wait(250)
    //   cy.intercept('/api/users/login')
    //     .as('login')
    //   cy.get('.col-xs-12 > .btn')
    //     .click();
    //   cy.wait('@login')
    //   // cy.wait(['@login', '@appversion'], { requestTimeout: 40000, responseTimeout: 60000 })

    //   // cy.intercept('/api/users/phoneLogin').as('phoneLogin')
    //   // cy.intercept('/api/users/current').as('current')
    //   cy.get('#phoneVerification')
    //     .type(Constants.Users.customer.smsVerificationCode)
    //   // cy.wait(250)
    //   // cy.wait('@phoneLogin')
    //   // cy.wait(['@phoneLogin', '@current'], { requestTimeout: 40000, responseTimeout: 60000 })

    //   // cy.location('pathname').should('eq', '/dashboard/customer');
    //   cy.get('#sidebarnav > :nth-child(1)')
    //   // cy.get("body").then($body => {
    //   //   if ($body.find("#cookieConfirmButton").length > 0) {
    //   //     cy.get("#cookieConfirmButton").click();
    //   //   }
    //   // });
    //   cy.checkPageA11y();
    //   // cy.get("body").then($body => {
    //   //   if ($body.find("#cookieConfirmButton").length > 0) {
    //   //     cy.get('#cookieConfirmButton').click()
    //   //   }
    //   // });

    //   cy.on('url:changed', (newUrl) => {
    //     cy.log(newUrl)
    //   })
    });

    it('4.a. Navigate to x', () => {

    });

    it('4.b. Navigate to x', () => {

    });

    it('M. Make sure we\'re logged out', () => {
    //   cy.request({
    //     method: 'GET',
    //     url: '/api/users/logout',
    //     failOnStatusCode: false,
    //   });
    //   cy.clearAuthenticationCookie();
    //   cy.request('GET', '/api/users/current')
    //     .then((response) => {
    //       expect(response.body.item).to.eq(null);
    //       cy.log(response.body.item)
    //     });
    //   cy.getCookies()
    //     .should(($cookies) => {
    //       cy.log($cookies.length)
    //     })
    });

    it('99. Navigate to product', () => {

    });

    it('99. Login from modal', () => {

    });

    it('99. Login from modal', () => {

    });

    it('Z. Make sure we\'re logged out', () => {
      cy.request({
        method: 'GET',
        url: '/api/users/logout',
        failOnStatusCode: false,
      });
      cy.clearAuthenticationCookie();
      cy.request('GET', '/api/users/current')
        .then((response) => {
          expect(response.body.item).to.eq(null);
          cy.log(response.body.item)
        });
      cy.getCookies()
        .should(($cookies) => {
          cy.log($cookies.length)
        })
    });

  })

});
