/* Exports a function that creates instances of shopping baskets */
'use strict';

const displayInPounds = require('./Util.js').displayInPounds;
const indent = '        ';

let basketCounter = 0;

class ShoppingBasket {
  constructor (discountFn, basketId) {
    this.calculatePrice = discountFn;
    this.items = new Map();
    this.basketId = basketId;
  }

  add (item, quantity) {
    quantity = quantity || 1;
    if (this.items.has(item)) {
      quantity = quantity + this.items.get(item);
    }
    this.items.set(item, quantity);
    return this.price();
  }

  remove (item, quantity) {
    quantity = quantity || 1;
    if (this.items.has(item)) {
      quantity = this.items.get(item) - quantity;
      if (quantity > 0) {
        this.items.set(item, quantity);
      } else {
        this.items.delete(item);
      }
    }
    return this.price();
  }

  reset () {
    this.items.clear();
  }

  list () {
    const list = [];
    this.items.forEach((quantity, item) => {
      while (quantity > 0) {
        list.push(item);
        quantity--;
      }
    });
    return list;
  }

  price () {
    return this.calculatePrice(this.items);
  }

  display () {
    const lines = [''];
    lines.push(indent + 'Basket #' + this.basketId + ':');
    this.items.forEach((quantity, item) => {
      lines.push(indent + quantity + ' x ' + item.description + ' (RRP: ' + displayInPounds(item.price) + ')');
    });
    lines.push(indent + 'Total: ' + displayInPounds(this.price()));
    return lines.join('\n');
  }
}

module.exports = (discountFn) => new ShoppingBasket(discountFn, ++basketCounter);
