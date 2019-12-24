var path = require('path')

/**
 * This module is equivalent to what the test in main-spec.js does.
 * @param builder
 * @returns {*}
 */
module.exports = function(builder) {
  return builder.merge({
    handlebars: {
      templates: path.join(__dirname, 'handlebars')
    },
    less: {
      main: require.resolve('./main.less')
    }
  })
}
