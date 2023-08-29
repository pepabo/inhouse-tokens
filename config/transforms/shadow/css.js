module.exports = {
  name: 'shadow/css',
  type: 'value',
  matcher: (token) => token.attributes.category === 'shadow',
  transformer: (token) => {
    const {
      x,
      y,
      blur,
      spread,
      color,
      alpha
    } = token.original.value

    const remToPx = (rem) => {
      return `${rem * 16}px`
    }

    return `${remToPx(x)} ${remToPx(y)} ${remToPx(blur)} ${remToPx(spread)} rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
  } 
}
