/* Generates pricing functions used in basket creation */
/* Responsible for all discount and price calsulation. */
/* BOGOF : buy-one-get-one-free */
'use strict';

const compose = require('./Util.js').compose;
const bogofBarCodes = new Set();
const nearestPenny = Math.floor;

// no reduce() method on Map
function sumItems (mapOfItemQuantities) {
  let sum = 0;
  mapOfItemQuantities.forEach((quantity, item) => {
    sum = sum + bogofDiscount(quantity, item);
  });
  return sum;
}

// buy-one-get-one-free
function bogofDiscount (quantity, item) {
  const multiplier = bogofBarCodes.has(item.barcode)
    ? Math.floor(quantity / 2) + quantity % 2
    : quantity;
  return nearestPenny(item.price * multiplier);
}

// 10% off orders > £20
function bulkDiscount (total) {
  return total > 2000
    ? nearestPenny(total * 0.9)
    : total;
}

// 2% off orders or customers with loyalty cards
function loyaltyDiscount (customerHasLoyaltyCard, total) {
  return customerHasLoyaltyCard
    ? nearestPenny(total * 0.98)
    : total;
}

function generateDiscountFunction (customerHasLoyaltyCard) {
  const optionalLoyaltyDiscount = loyaltyDiscount.bind(null, customerHasLoyaltyCard);
  return compose(optionalLoyaltyDiscount, bulkDiscount, sumItems);
}

module.exports = {
  generateDiscountFunction
};
