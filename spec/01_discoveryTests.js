/* eslint-env jasmine */
'use strict';

const td = require('testdouble');

let itemCatalogue;
let createShoppingBasket;
let generateDiscountFunction;
let ShoppingBasket;

describe('Discovery Testing', () => {
  describe('Core Concerns ', () => {
    beforeEach(() => {
      itemCatalogue = require('../lib/ItemCatalogue.js');
      createShoppingBasket = require('../lib/BasketFactory.js');
      generateDiscountFunction = require('../lib/DiscountEngine.js').generateDiscountFunction;
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
      createShoppingBasket = td.replace('../lib/BasketFactory.js');
      generateDiscountFunction = td.replace('../lib/DiscountEngine.js').generateDiscountFunction;
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
