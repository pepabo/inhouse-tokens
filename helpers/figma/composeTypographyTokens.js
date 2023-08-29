module.exports = (obj) => {
  const { capitalCase } = require("change-case")

  return ['normal', 'bold'].reduce((pre, weight) => {
    const value = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'].reduce((pre_, sizing) => {
      const value_ = ['dense', 'normal', 'comfort'].reduce((pre__, density) => {
        return {
          ...pre__,
          [density]: {
            type: 'typography',
            value: {
              fontFamily: 'Open Sans',
              fontWeight: capitalCase(weight == 'normal' ? 'Regular' : weight),
              lineHeight: `${Math.round(obj.size['line-height'].base[density][sizing].value / obj.size.font.base[sizing].value * 100).toString()}%`,
              fontSize: obj.size.font.base[sizing].value.toString(),
              paragraphSpacing: 0,
              letterSpacing: 0
            }
          }
        }
      }, {})

      return {
        ...pre_,
        [sizing]: value_
      }
    }, {})

    return {
      ...pre,
      [weight]: value
    }
  }, {})
}
