/* eslint-env jasmine */
'use strict';

const ShoppingBasket = require('../lib/ShoppingBasket.js');
const ItemCatalogue = require('../lib/ItemCatalogue.js');
const DiscountEngine = require('../lib/DiscountEngine.js');

const shreddies = ItemCatalogue.create(123456780, 'Shreddies 500g', 239);
const milk = ItemCatalogue.create(123456781, 'Milk 2lt', 99);
const wine = ItemCatalogue.create(123456782, 'Vin de Table - Rouge 0.75lt', 499);
const pringles = ItemCatalogue.create(123456783, 'Pringles - BBQ Flavour', 129);

const dummyTestFn = () => {};

describe('Demo Suite', () => {
  describe('A hurried purchase on way to a party:', () => {
    const basket = ShoppingBasket.create();
    basket.add(wine);
    it(basket.display(), dummyTestFn);
  });
  describe('A more generous party goer:', () => {
    const basket = ShoppingBasket.create();
    basket.add(wine, 2);
    basket.add(pringles);
    it(basket.display(), dummyTestFn);
  });
  describe('Student\'s weekly shop - 10% discount as over £20', () => {
    const basket = ShoppingBasket.create();
    basket.add(shreddies, 3);
    basket.add(milk, 2);
    basket.add(wine, 5);
    it(basket.display(), dummyTestFn);
  });
  describe('Lucky Student\'s weekly shop - BOGOF on wine  + 10% discount as over £20:', () => {
    DiscountEngine.addBOGOF(wine.barcode);
    const basket = ShoppingBasket.create();
    basket.add(shreddies, 3);
    basket.add(milk, 2);
    basket.add(wine, 10);
    it(basket.display(), dummyTestFn);
  });
  describe('Regular\'s breakfast shop - 2% discount for loyalty card:', () => {
    const basket = ShoppingBasket.create(true);
    basket.add(shreddies);
    basket.add(milk);
    it(basket.display(), dummyTestFn);
  });
});
