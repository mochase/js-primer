// 检测属性

/**
 * in: 用来检测自有属性或继承属性
 */

var o = Object.create({ p: 1 })
o.x = 1
console.log('x' in o, 'p' in o)

/**
 * hasOwnProperty: 用来检测是否是自有属性
 */
console.log(o.hasOwnProperty('x'), o.hasOwnProperty('p'))

/**
 * propertyIsEnumerable: 用来检测: 自有属性 且 可枚举
 */
console.log(Object.prototype.propertyIsEnumerable('toString'))