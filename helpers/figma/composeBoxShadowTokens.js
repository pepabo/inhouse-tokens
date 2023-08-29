module.exports = (obj) => {
  const createShadow = require("./createShadow")
  const { shadow } = obj

  const elevation = Array.from(Array(7).keys()).reduce((pre, key) => {
    return { ...pre, [key]: {
      value: [
        createShadow(shadow.elevation[key]['key-light'].value, "dropShadow"),
        createShadow(shadow.elevation[key]['ambient-light'].value, "dropShadow"),
        createShadow(shadow.elevation[key].adjustment.value, "dropShadow")
      ]
    }}
  }, {})

  return {
    "solid-button": {
      value: [
        createShadow(shadow.button.solid.highlight.value, "innerShadow"),
        createShadow(shadow.button.solid.shadow.value, "innerShadow")
      ]
    },
    elevation
  }
}
