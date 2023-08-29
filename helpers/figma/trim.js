module.exports = (obj) => {
  const trimName = require("./trimName")
  const trimValue = require("./trimValue")

  return trimName(trimValue(obj))
}
