# Shopping Basket

We must be able to : 
* Add items to the shopping basket 
* Remove items from the shopping basket 
* Empty the shopping basket 
 
Additionally, we must be able to calculate the total of the shopping basket accounting for: 
* Buy-one-get-one-free discounts on items 
* 10% off on totals greater than £20 (after bogof) 
* 2% off on total (after all other discounts) for customers with loyalty cards. 

For more on the thinking behind the development see [methinks](METHINKS.md).


## Installation
You will need node v6+ installed:
```shell
git clone https://github.com/numical/shoppingbasket.git
cd shoppingbasket
npm i
npm test
```

The last command will write to console the full test suite.

Note that the a `npm run debug` option is available.  For this to run you need:
* no later than node v6.3.1 (due to [this](http://github.com/node-inspector/node-inspector/issues/907) bug)
* a global install of [`node-inspector`](https://www.npmjs.com/package/node-inspector)


## Licence
The MIT Licence (MIT)

Copyright (c) 2016 Incremental Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
