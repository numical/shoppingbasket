class ShoppingBasket {
  constructor (discountFn) {
    this.calculatePrice = discountFn;
    this.items = new Map();
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
}

module.exports = (discountFn) => new ShoppingBasket(discountFn);
