const composeFigmaTokens = require('../../../helpers/figma/composeFigmaTokens')

module.exports = {
  name: 'figma',
  formatter: ({ dictionary }) => {
    const parsedTokens = composeFigmaTokens(dictionary.tokens)
    return JSON.stringify(parsedTokens, null, 2)
  }
}
