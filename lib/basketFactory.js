class ShoppingBasket {
  constructor (discountFn) {
    this.calculatePrice = discountFn;
    this.items = new Map();
  }

  add (item, quantity) {
    if (this.items.has(item)) {
      quantity = quantity + this.items.get(item);
    }
    this.items.set(item, quantity);
    return this.calculatePrice(this.items);
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
}

module.exports = (discountFn) => new ShoppingBasket(discountFn);
