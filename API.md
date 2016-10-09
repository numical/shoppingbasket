## Public API ##

## Global Singletons ##
The following four objects are globally scoped and should be accessed statically:

### `ItemCatalogue` ###
A factory and store for purchace `Item`s:
* `create(barcode, description, price)` creates an item and adds it to the store
 * `barcode` unique identifying integer
 * `description` human-readable description
 * `price` in pence
 * **return** an `item` 
* `list()` returns an immutable array of all `item`s
 * **return** array of `item`s
* `reset()` clears the catalogue

### `ShoppingBasket` ###
A factory for `Basket`s:
* `create([customerHasLoyaltyCard])` creates a `Basket` instance:
 * `customerHasLoyaltyCard` optional boolean; affects the applied discounts

### `DiscountEngine` ###
Wraps all discounting and price calculations:
* `addBOGOF(barcode)` adds an item eligable for buy-one-get-one-free disocunts
 * `barcode` integeer
* `reset()` clears all BOGOF items

### `Util` ###
Utility functions:
* `displayInPounds(pence)` converts a pence integer to a pound String displayInPounds
 * `pence` integer
 * **return** String


## Instance Objects ##
Instances created by the singleton objects.


### `Item` ###
A data object without behaviour.  Properties:
* `barcode` unique identifying integer
* `description` human-readable description
* `price` in pence


### `Basket` ###
An instance of a shopping basket:
* `add(item[, quantity])` adds an item to the basket
 * `item` the `item` to add
 * `quantity` optional integer for more than one instance of the `item`
 * **return** the total price of the basket, including discounts
* `remove(item[, quantity])` removes an item from the basket
 * `item` the `item` to add
 * `quantity` optional integer for more than one instance of the `item`
 * **return** the total price of the basket, including discounts
* `reset()` clears the basket
* `list()` lists all `item`s in the basket; if more than one instance, each is listed seperately
 * **return** array of `item`s
* `price()` returns the total price of the basket, including discounts
 * **return** total price in pence
* `display()` return a multi-line String pretty-printing the basket
 * **return** String