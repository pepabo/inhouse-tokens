const fs = require('fs')
const Handlebars = require('handlebars')
const { fileHeader } = require('style-dictionary/lib/common/formatHelpers')
const { capitalCase, constantCase } = require('change-case')

Handlebars.registerHelper('fileHeader', (file, commentStyle) => {
  return fileHeader({file, commentStyle})
})
Handlebars.registerHelper('capitalCase', capitalCase)
Handlebars.registerHelper('constantCase', constantCase)

module.exports = {
  name: 'compose/nested-object',
  formatter: ({ dictionary, file, options }) => {
    const template = Handlebars.compile(fs.readFileSync(__dirname + '/../../../templates/compose/nested-object.kt.hbs', 'utf8'))
    return template({ dictionary, file, options })
  }
}
