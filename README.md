# Cypress combined integration, unit, and component tests

> Demo full suite of Cypress tests along with code coverage using yarn

## Branch tree

```shell
> cypress-starter : main branch with basic cypress added

>> e2e-and-ct :  includes tests that trigger all three varieties, integration, unit, and component

>>> coverage : attempting to make @cypress/code-coverage and babel-plugin-istanbul work as advertised

>>> use-browserify-istanbul : alternate to .babelrc

>>> cypress-istanbul : alternate, instead of babel-plugin-istanbul

>>> combo-instrument-cra : alternate,instead of babel-plugin-istanbul

```

## Issues

Coverage is being generated on-the-fly, but only for cypress folder
