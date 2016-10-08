/* Facade that hides shopping baskets creation logic */
'use strict';

const compose = require('./Util.js').compose;
const createShoppingBasket = require('./BasketFactory.js');
const generateDiscountFunction = require('./DiscountEngine.js').generateDiscountFunction;

module.exports = {
  create: compose(createShoppingBasket, generateDiscountFunction)
};
