module.exports = (obj) => {
  const trimName = (obj) => {
    const newObj = { ...obj }

    Object.keys(newObj).forEach(key => {
      if (key === 'name') {
        delete newObj[key]
      } else if (typeof newObj[key] === 'object') {
        newObj[key] = trimName((newObj[key]))
      }
    })

    return newObj
  }

  return trimName(obj)
}
