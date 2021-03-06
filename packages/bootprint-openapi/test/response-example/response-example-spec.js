/*!
 * bootprint-swagger <https://github.com/nknapp/bootprint-swagger>
 *
 * Copyright (c) 2015 Nils Knappmeier.
 * Released under the MIT license.
 */

/* global describe */
/* global it */
/* global before */
const expect = require('chai').expect
const core = require('../core')

describe('The response-examples fixture', function() {
  this.timeout(10000)
  const context = {}
  before(function() {
    return core.run(require('./swagger.json'), __dirname, context)
  })
  it('should render the response examples', function() {
    expect(context.$('dd.sw-response-200').text()).to.match(/hommingberg/)
  })
})
