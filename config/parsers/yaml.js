const yaml = require('yaml')

module.exports = {
  pattern: /\.yaml$/,
  parse: ({contents}) => yaml.parse(contents)
}
