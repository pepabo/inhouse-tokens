module.exports = {
  name: 'size/content',
  type: 'value',
  matcher: (token) => token.attributes.category === 'content',
  transformer: (token) => `${token.original.value}px`
}
