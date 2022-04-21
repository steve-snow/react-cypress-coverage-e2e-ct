/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const browserify = require('@cypress/browserify-preprocessor')

module.exports = (on) => {
  on('task', require('cypress-istanbul/task'))

  // tell Cypress to use .babelrc when bundling spec code
  const options = browserify.defaultOptions
  options.browserifyOptions.transform[1][1].babelrc = true
  on('file:preprocessor', browserify(options))
}
