# A Running Commentary

## GUI or no GUI
* Not asked for but would impress
* But not much time
* So, do the minimum required (demonstrable unit tests) and ensure this works
* But design-in alternative clients

## Environment
* Latest greatest javascript to show cleanest code
* Ensure runnable in latest Node
* If time for GUI, add build process with transpiling for browsers

## Sync / Async?
* Domain problem really does not require async
* So for reasonability/familiarity stick with sync

## Core Responsibilities
* Off to discovery testing...
* [Set it up](https://github.com/numical/shoppingbasket/tree/start-of-discovery-testing)
* So what dos the client (aka test, GUI etc) require?
 * an item catalogue (global)
 * a shopping basket (instance)
* [So mock
these](https://github.com/numical/shoppingbasket/tree/discovery-testing-01-core-responsibilities)

## What type of Object Orientation?
* This is JavaScript so have options here - functional, OLOO, OO..?
* Using a bit of epxperience here, let's use factories to hide 'new' and 'this' ugliness but use
classes within these factories for conceptual clarity...

## Discount Logic
* When considering factories, a tricky issue arose:
* Who is responsible for discount logic?  How is this introduced?
 * a discount engine that injects a discount function on basket creation
* This led to a function chain for basket creation - so wrap in a Facade - see the
[result](https://github.com/numical/shoppingbasket/tree/discovery-testing-02-basket-creation-facade)

## Discover Relationships
* So now time to explore the iteraction between these core concerns
* In fact these are fairly self-evident now.
* In a more complicated problem we would continue with discovery tests to drive out any subtleties
etc.
* But right now, it is probably more productive to switch to an approach where instead of mocks we
use tests to write the production code - the classic red-green-refactor TDD approach.
* Note though, that we are following a BDD approach so it is stll top-down.
* This alas, will be more difficult to show with git snapshots.

## Add and Remove Item
* Currently concentrate on quantity - price comes later.
* See [tests so
far](https://github.com/numical/shoppingbasket/tree/acceptance-testing-02-add-remove-items)

## Item Definition
* So far, a definition of what a basket item actually is has been unnecessary.
* The only assumption has been that their hash values would be unique.
* Before we can get into pricing functionality we now need to define what an item is.
* In a statically typed language we would now be thinking of a type or a class.
* In JavaScript we will control item definition though use of a factory - time to use the item
catalogue
* See [tests so
far](https://github.com/numical/shoppingbasket/tree/acceptance-testing-03-item-catalogue-tests)
* Note that the `create()` function could be much more stringent - currently it does not validate
arguments except for barcode uniqueness.

## Pricing
* Several notes here:
 * Internationalisation is not a rquirement so storing integer prices as 100ths of the current (aka
     pence!) is deemed sufficient;
 * All calculations will rounded down to nearest penny at each stage; (this is not a bank but best be
     explicit);
 * From the initial discovery testing, we have decided that the discount engine must be responsible
for all discount calculations; this includes knowledge of BOGOF items;
 * For convenience of both the runtime and testing, thr shopping basket will return the total price
 on each change.
* So...



