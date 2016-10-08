/* Defines all items available for the shopping baskets */
'use strict';

const barcodes = new Set();
const items = [];

module.exports = {
  reset: () => {
    barcodes.clear();
    items.length = 0;
  },
  create: (barcode, description, price) => {
    // could/should add assertions on the arguments
    if (barcodes.has(barcode)) throw new Error('Non-unique bar code');
    const item = Object.freeze({barcode: barcode, description: description, price: price});
    barcodes.add(barcode);
    items.push(item);
    return item;
  },
  list: () => Object.freeze(Array.from(items))
};
