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

describe('The definition-without-type fixture', function() {
  this.timeout(10000)
  const context = {}
  before(function() {
    return core.run(require('./swagger.json'), __dirname, context)
  })

  it('should contain a reference the property "aPropertyName"', function() {
    expect(context.$('#definition-no-type').html()).to.contain('aPropertyName')
  })
})
