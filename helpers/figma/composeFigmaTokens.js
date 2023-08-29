module.exports = (obj) => {
  const composeSpacingTokens = require("./composeSpacingTokens")
  const composeSizingTokens = require("./composeSizingTokens")
  const composeBorderRadiusTokens = require("./composeBorderRadiusTokens")
  const composeBorderWidthTokens = require("./composeBorderWidthTokens")
  const composeColorsTokens = require("./composeColorsTokens")
  const composeOpacityTokens = require("./composeOpacityTokens")
  const composeFontFamiliesTokens = require("./composeFontFamiliesTokens")
  const composeLineHeightsTokens = require("./composeLineHeightsTokens")
  const composeBoxShadowTokens = require("./composeBoxShadowTokens")
  const composeFontSizesTokens = require("./composeFontSizesTokens")
  const composeTypographyTokens = require("./composeTypographyTokens")
  const trim = require("./trim")

  return {
    inhouse: {
      spacing: trim(composeSpacingTokens(obj)),
      sizing: trim(composeSizingTokens(obj)),
      borderRadius: trim(composeBorderRadiusTokens(obj)),
      borderWidth: trim(composeBorderWidthTokens(obj)),
      colors: trim(composeColorsTokens(obj)),
      opacity: trim(composeOpacityTokens(obj)),
      fontFamilies: trim(composeFontFamiliesTokens(obj)),
      lineHeights: trim(composeLineHeightsTokens(obj)),
      boxShadow: composeBoxShadowTokens(obj),
      fontSizes: trim(composeFontSizesTokens(obj)),
      typography: trim(composeTypographyTokens(obj)),
    }
  }
}
