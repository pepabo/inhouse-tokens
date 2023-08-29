module.exports = {
  name: 'opacity/floatToPercent',
  type: 'value',
  matcher: (token) => token.attributes.category === 'opacity',
  transformer: (token) => {
    return `${token.value * 100}%`
  }
}
