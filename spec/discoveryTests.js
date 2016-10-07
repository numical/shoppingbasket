/* eslint-env jasmine */
/* global since:false */
'use strict';

const SpecReporter = require('jasmine-spec-reporter');
jasmine.getEnv().addReporter(new SpecReporter());
require('jasmine2-custom-message');

describe('Discovery Tests ', () => {
  it('client exists', () => {
    since('No client exists').expect(false).toBe(true);
  });
});
