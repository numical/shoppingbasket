'use strict';
// const compose = require('./Util.js').compose();

const bogofBarCodes = new Set();
const nearestPenny = Math.floor;

function sumEachItem (mapOfItemQuantities) {
  // no reduce() method on a Map :-(
  let sum = 0;
  mapOfItemQuantities.forEach((quantity, item) => {
    sum = sum + nearestPenny(item.price * quantity);
  });
  return sum;
}

function addBOGOF (barcode) {
  bogofBarCodes.add(barcode);
}

module.exports = {
  generateDiscountFunction: () => sumEachItem,
  addBOGOF: addBOGOF
};
