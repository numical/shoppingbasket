/* eslint-env jasmine */
'use strict';

const SpecReporter = require('jasmine-spec-reporter');
jasmine.getEnv().addReporter(new SpecReporter());
require('jasmine2-custom-message');

const td = require('testdouble');

let itemCatalogue;
let createShoppingBasket;
let generateDiscountFunction;
let ShoppingBasket;

describe('Discovery Testing', () => {
  describe('Core Concerns ', () => {
    beforeEach(() => {
      itemCatalogue = require('../lib/itemCatalogue.js');
      createShoppingBasket = require('../lib/basketFactory.js');
      generateDiscountFunction = require('../lib/discountEngine.js');
    });
    it('client requires item catalogue', () => {
      expect(itemCatalogue).toBeDefined();
    });
    it('client requires factory function for shopping baskets', () => {
      expect(createShoppingBasket).toBeDefined();
    });
    it('shopping basket creation requires discount engine', () => {
      expect(generateDiscountFunction).toBeDefined();
    });
  });
  describe('Basket Facade', () => {
    beforeEach(() => {
      createShoppingBasket = td.replace('../lib/basketFactory.js');
      generateDiscountFunction = td.replace('../lib/discountEngine.js');
      ShoppingBasket = require('../lib/ShoppingBasket.js');
    });
    it('Facade wraps basket creation', () => {
      let discountFn = () => 42;
      td.when(generateDiscountFunction(false)).thenReturn(discountFn);

      ShoppingBasket.create(false);

      td.verify(createShoppingBasket(discountFn));
    });
  });
});
