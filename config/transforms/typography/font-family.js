module.exports = {
  name: 'typography/font-family',
  type: 'value',
  matcher: (token) => token.attributes.category === 'typography',
  transformer: (token) => `"${token.original.value}"`
}
