/* eslint-env jasmine */
'use strict';

const SpecReporter = require('jasmine-spec-reporter');
jasmine.getEnv().addReporter(new SpecReporter());
require('jasmine2-custom-message');

const td = require('testdouble');

const itemCatalogue = td.replace('../lib/itemCatalogue.js');
const shoppingBasket = td.replace('../lib/shoppingBasket.js');

describe('Discovery Tests ', () => {
  it('client requires item catalogue', () => {
    expect(itemCatalogue).toBeDefined();
  });

  it('client requires shopping basket', () => {
    expect(shoppingBasket).toBeDefined();
  });

  afterEach(() => {
    td.reset();
  });
});
