module.exports = {
  name: 'size/remToNumber',
  type: 'value',
  matcher: (token) => token.attributes.category === 'size',
  transformer: (token) => {
    const val = parseFloat(token.value)
    const baseFont = 16
    return val * baseFont
  }
}
