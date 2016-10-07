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
* In a more complicated problem we would continue with discovery tests to drive out any subtlties
etc.
* But right now, it is probably more productive to switch to an approach where instead of mocks we
use top-down tests to write the production code - the classic red-green-refactor TDD approach
* This alas, will be more difficult to show with git snapshots.

## Add an item
* The simplest use case - will drive out what an 'item' actually is and how it is used.
* It will be a simple value object - a hash of values.
* Currently concentrate on quantity - price comes later.
* See ...
