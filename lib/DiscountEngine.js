/* BOGOF : buy-one-get-one-free */
'use strict';

const compose = require('./Util.js').compose;
const bogofBarCodes = new Set();
const nearestPenny = Math.floor;

function sumEachItem (mapOfItemQuantities) {
  // no reduce() method on a Map :-(
  let sum = 0;
  mapOfItemQuantities.forEach((quantity, item) => {
    sum = sum + sumItem(quantity, item);
  });
  return sum;
}

function sumItem (quantity, item) {
  const multiplier = bogofBarCodes.has(item.barcode)
    ? Math.floor(quantity / 2) + quantity % 2
    : quantity;
  return nearestPenny(item.price * multiplier);
}

function tenPercentOff (total) {
  return total > 2000
    ? nearestPenny(total * 0.9)
    : total;
}

module.exports = {
  generateDiscountFunction: () => compose(tenPercentOff, sumEachItem),
  addBOGOF: Set.prototype.add.bind(bogofBarCodes),
  reset: Set.prototype.clear.bind(bogofBarCodes)
};
