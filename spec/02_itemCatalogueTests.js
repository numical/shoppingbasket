/* eslint-env jasmine */
'use strict';

const subject = require('../lib/ItemCatalogue.js');

describe('Item Catalogue Tests', () => {
  beforeEach(() => {
    subject.reset();
  });
  it('Can create an item', () => {
    const item = subject.create(123, 'Shreddies 500g', 239);
    expect(item).toBeDefined();
    expect(item.barcode).toEqual(123);
    expect(item.description).toEqual('Shreddies 500g');
    expect(item.price).toEqual(239);
  });
  it('Creating an item adds it to the catalogue', () => {
    const item = subject.create(123, 'Shreddies 500g', 239);
    const catalogue = subject.list();
    expect(catalogue.length).toEqual(1);
    expect(catalogue[0]).toBe(item);
  });
  it('Creating multiple items adds them to the catalogue', () => {
    const shreddies = subject.create(123, 'Shreddies 500g', 239);
    const milk = subject.create(456, 'Milk 2lt', 99);
    const catalogue = subject.list();
    expect(catalogue.length).toEqual(2);
    expect(catalogue[0]).toBe(shreddies);
    expect(catalogue[1]).toBe(milk);
  });
  it('Catalogue enforces unique barcodes', () => {
    subject.create(123, 'Shreddies 500g', 239);
    const testFn = subject.create.bind(null, 123, 'Milk 2lt', 99);
    expect(testFn).toThrow();
  });
  it('Reset clears everything', () => {
    const testFn = subject.create.bind(null, 123, 'Shreddies', 239);
    testFn();
    subject.reset();
    expect(subject.list().length).toEqual(0);
    expect(testFn).not.toThrow();
    expect(subject.list().length).toEqual(1);
  });
});
