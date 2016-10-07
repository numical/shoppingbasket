const compose = require('./util.js').compose;
const createShoppingBasket = require('./basketFactory.js');
const generateDiscountFunction = require('./discountEngine.js');

module.exports = {
  create: compose(createShoppingBasket, generateDiscountFunction)
};
