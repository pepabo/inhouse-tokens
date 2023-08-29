const StyleDictionary = require('style-dictionary')
const yamlParser = require('./parsers/yaml')
const sizeBoundaryTransform = require('./transforms/size/boundary')
const sizeContentTransform = require('./transforms/size/content')
const sizeRemToNumberTransform = require('./transforms/size/remToNumber')
const typographyFontFamilyTransform = require('./transforms/typography/font-family')
const shadowCssTransform = require('./transforms/shadow/css')
const opacityFloatToPercentTransform = require('./transforms/opacity/floatToPercent')
const androidNestedObjectFormat = require('./formats/android/nestedObject')
const figmaFormat = require('./formats/figma')

StyleDictionary.registerTransform(sizeBoundaryTransform)
StyleDictionary.registerTransform(sizeContentTransform)
StyleDictionary.registerTransform(sizeRemToNumberTransform)
StyleDictionary.registerTransform(typographyFontFamilyTransform)
StyleDictionary.registerTransform(shadowCssTransform)
StyleDictionary.registerTransform(opacityFloatToPercentTransform)
StyleDictionary.registerFormat(androidNestedObjectFormat)
StyleDictionary.registerFormat(figmaFormat)

const buildRootPath = 'build/nachiguro'

module.exports = {
  parsers: [yamlParser],
  source: ['tokens/nachiguro/**/*.yaml'],
  platforms: {
    figma: {
      transforms: ['attribute/cti', 'name/cti/pascal', 'size/remToNumber', 'color/css', 'opacity/floatToPercent'],
      buildPath: `${buildRootPath}/figma/`,
      files: [
        {
          destination: 'tokens.json',
          format: 'figma',
        }
      ]
    },
    javascript: {
      buildPath: `${buildRootPath}/javascript/`,
      files: [{
        destination: 'tokens.js',
        format: 'javascript/module'
      }]
    },
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'content/icon', 'size/rem', 'size/boundary', 'size/content', 'typography/font-family', 'shadow/css', 'color/css'],
      buildPath: `${buildRootPath}/scss/`,
      files: [{
        destination: '_variables.scss',
        format: 'scss/map-deep',
        mapName: 'tokens'
      }]
    }
  }
}
