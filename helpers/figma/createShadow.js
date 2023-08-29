module.exports = (value, type) => {
  return {
    x: 16 * value.x,
    y: 16 * value.y,
    spread: 16 * value.spread,
    color: `rgba(${value.color.r}, ${value.color.g}, ${value.color.b}, ${value.alpha})`,
    blur: 16 * value.blur,
    type: type
  }
}
