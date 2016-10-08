/* eslint-env jasmine */
'use strict';

const ShoppingBasket = require('../lib/ShoppingBasket.js');

const shreddies = {
  barcode: 123,
  price: 239,
  description: 'Shreddies 500g'
};
const milk = {
  barcode: 456,
  price: 99,
  description: 'Milk 2lt'
};

describe('Acceptance Tests', () => {
  describe('Use Case 1: Adding items to a basket', () => {
    let subject;
    beforeEach(() => {
      subject = ShoppingBasket.create();
    });
    it('Can add a single item', () => {
      subject.add(shreddies, 1);
      expect(subject.list().length).toEqual(1);
    });
    it('Add defaults to adding a single item', () => {
      subject.add(shreddies);
      expect(subject.list().length).toEqual(1);
    });
    it('Can add more than 1 of an item', () => {
      subject.add(shreddies, 3);
      expect(subject.list().length).toEqual(3);
    });
    it('Can repeatedly add an item', () => {
      subject.add(shreddies, 2);
      subject.add(shreddies);
      subject.add(shreddies, 3);
      expect(subject.list().length).toEqual(6);
    });
    it('Can add  multiple items', () => {
      subject.add(shreddies, 1);
      subject.add(milk, 2);
      expect(subject.list().length).toEqual(3);
    });
  });
  describe('Use Case 2: Removing items from a basket', () => {
    let subject;
    beforeEach(() => {
      subject = ShoppingBasket.create();
    });
    it('It is harmless to remove an item not in the basket', () => {
      subject.remove(shreddies, 1);
      expect(subject.list().length).toEqual(0);
    });
    it('Can remove a single item', () => {
      subject.add(shreddies, 2);
      subject.remove(shreddies);
      expect(subject.list().length).toEqual(1);
    });
    it('Can remove more than 1 of an item', () => {
      subject.add(shreddies, 5);
      subject.remove(shreddies, 3);
      expect(subject.list().length).toEqual(2);
    });
    it('It is harmless to remove more items than are in the basket', () => {
      subject.add(shreddies);
      subject.remove(shreddies, 2);
      expect(subject.list().length).toEqual(0);
    });
    it('Can remove multiple items', () => {
      subject.add(shreddies, 3);
      subject.add(milk, 3);
      subject.remove(shreddies, 2);
      subject.remove(milk);
      expect(subject.list().length).toEqual(3);
    });
  });
});
