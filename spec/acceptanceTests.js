/* eslint-env jasmine */
'use strict';

const ShoppingBasket = require('../lib/ShoppingBasket.js');

const item = {
  barcode: 123,
  price: 239,
  description: 'Shreddies 500g'
};

describe('Acceptance Tests', () => {
  describe('Use Case 1: Adding an item to a basket', () => {
    let shoppingBasket;
    beforeEach(() => {
      shoppingBasket = ShoppingBasket.create();
    });
    it('Add single item', () => {
      shoppingBasket.add(item, 1);
      expect(shoppingBasket.list().length).toEqual(1);
    });
  });
});
