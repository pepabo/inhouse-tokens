module.exports = {
  name: 'size/boundary',
  type: 'value',
  matcher: (token) => token.attributes.category === 'boundary',
  transformer: (token) => `${token.original.value}px`
}
