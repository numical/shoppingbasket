/* eslint-env jasmine */
'use strict';

const ShoppingBasket = require('../lib/ShoppingBasket.js');
const ItemCatalogue = require('../lib/ItemCatalogue.js');

const shreddies = ItemCatalogue.create(123, 'Shreddies 500g', 239);
const milk = ItemCatalogue.create(456, 'Milk 2lt', 99);

describe('Acceptance Tests', () => {
  let subject;
  beforeEach(() => {
    subject = ShoppingBasket.create();
  });
  describe('Use Case 1: Adding items to a basket (including price calculation)', () => {
    it('Can add a single item', () => {
      const price = subject.add(shreddies, 1);
      expect(subject.list().length).toEqual(1);
      expect(price).toEqual(239);
    });
    it('Add defaults to adding a single item', () => {
      const price = subject.add(shreddies);
      expect(subject.list().length).toEqual(1);
      expect(price).toEqual(239);
    });
    it('Can add more than 1 of an item', () => {
      const price = subject.add(shreddies, 3);
      expect(subject.list().length).toEqual(3);
      expect(price).toEqual(239 * 3);
    });
    it('Can repeatedly add an item', () => {
      subject.add(shreddies, 2);
      subject.add(shreddies);
      const price = subject.add(shreddies, 3);
      expect(subject.list().length).toEqual(6);
      expect(price).toEqual(6 * 239);
    });
    it('Can add multiple items', () => {
      subject.add(shreddies, 1);
      const price = subject.add(milk, 2);
      expect(subject.list().length).toEqual(3);
      expect(price).toEqual(239 + 2 * 99);
    });
  });
  describe('Use Case 2: Removing items from a basket (including price calculation)', () => {
    it('It is harmless to remove an item not in the basket', () => {
      const price = subject.remove(shreddies, 1);
      expect(subject.list().length).toEqual(0);
      expect(price).toEqual(0);
    });
    it('Can remove a single item', () => {
      subject.add(shreddies, 2);
      const price = subject.remove(shreddies);
      expect(subject.list().length).toEqual(1);
      expect(price).toEqual(239);
    });
    it('Can remove more than 1 of an item', () => {
      subject.add(shreddies, 5);
      const price = subject.remove(shreddies, 3);
      expect(subject.list().length).toEqual(2);
      expect(price).toEqual(2 * 239);
    });
    it('It is harmless to remove more items than are in the basket', () => {
      subject.add(shreddies);
      const price = subject.remove(shreddies, 2);
      expect(subject.list().length).toEqual(0);
      expect(price).toEqual(0);
    });
    it('Can remove multiple items', () => {
      subject.add(shreddies, 3);
      subject.add(milk, 3);
      subject.remove(shreddies, 2);
      const price = subject.remove(milk);
      expect(subject.list().length).toEqual(3);
      expect(price).toEqual(239 + 2 * 99);
    });
  });
  describe('Use Case 3: Explicit Price Scenarios', () => {
    it('Empty basket has zero price', () => {
      expect(subject.price()).toEqual(0);
    });
    it('Explicit price() call matches reported price on change', () => {
      subject.add(shreddies, 4);
      const price = subject.add(milk, 3);
      expect(subject.price()).toEqual(price);
    });
  });
});