module.exports = (obj) => {
  const { content, height, scale, width } = obj.size

  return { content, height, scale, width }
}
