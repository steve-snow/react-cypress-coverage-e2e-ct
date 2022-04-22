/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
/// <reference types="cypress" />
import * as math from './math'

describe('Unit Test refundsService', () => {
    const {
        add,
        // futureNotUsed,
        // getTheAnswer,
    } = math
  
    before(() => {
      // check if the import worked correctly
      expect(add, 'add').to.be.a('function')
    })
  
    context('A. add', () => {
      it('handles no inputs', () => {
        expect(add()).to.eq(0)
      })
  
      it('handles two numbers', () => {
        expect(add(5, 7)).to.eq(12)
      })
  
  
      it('handles two strings', () => {
        expect(add('he','llo')).to.eq('hello')
      })
  
    })
  
  })